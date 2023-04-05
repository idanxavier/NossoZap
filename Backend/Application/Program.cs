using Application.Context;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Service.Implementation;
using Service.Interface;
using System.Text;

#region builder

    var builder = WebApplication.CreateBuilder(args);
    ConfigurationManager configuration = builder.Configuration;
    #pragma warning disable CS8600
    string mySqlConnection = configuration.GetConnectionString("Database");
    #pragma warning restore CS8600

builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    builder.Services.AddDbContextPool<MySQLContext>(options => options.UseMySql(mySqlConnection, ServerVersion.AutoDetect(mySqlConnection)));
    builder.Services.AddIdentity<IdentityUser, IdentityRole>()
        .AddEntityFrameworkStores<MySQLContext>()
        .AddDefaultTokenProviders();

    builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(options =>
        {
            options.SaveToken = true;
            options.RequireHttpsMetadata = false;
            #pragma warning disable CS8604
            options.TokenValidationParameters = new TokenValidationParameters()
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidAudience = configuration["JWT:ValidAudience"],
                ValidIssuer = configuration["JWT:ValidIssuer"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]))
            };
            #pragma warning restore CS8604
        });

    builder.Services.AddScoped<IAuthService, AuthService>();

#endregion

#region app

    var app = builder.Build();

    using (var scope = app.Services.CreateScope())
    {
        var service = scope.ServiceProvider;

        var context = service.GetRequiredService<MySQLContext>();
        if (context.Database.GetPendingMigrations().Any())
            context.Database.Migrate();
    }

    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseHttpsRedirection();

    app.UseAuthentication();
    app.UseAuthorization();

    app.MapControllers();

    app.Run();

#endregion