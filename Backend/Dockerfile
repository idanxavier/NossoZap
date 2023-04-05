# FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
# WORKDIR /app
# EXPOSE 80
# EXPOSE 443

# FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
# WORKDIR /src
# COPY ["Application.csproj", "."]
# RUN dotnet restore "./Application.csproj"
# COPY . .
# WORKDIR "/src/."
# RUN dotnet build "Application.csproj" -c Release -o /app/build

# FROM build AS publish
# RUN dotnet publish "Application.csproj" -c Release -o /app/publish /p:UseAppHost=false

# FROM base AS final
# WORKDIR /app
# COPY --from=publish /app/publish .
# ENTRYPOINT ["dotnet", "Application.dll"]

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /App
COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /App
COPY --from=build-env /App/out .
ENTRYPOINT ["dotnet", "Application.dll"]