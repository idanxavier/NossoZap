import { User } from "../userModel";

export class SsoDTO {

  access_token: string = '';
  me: User = new User();

}
