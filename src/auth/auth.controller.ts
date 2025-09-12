import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersService } from "src/users/users.service";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  //@UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Body() input: { email: string; password: string }) {
    console.log(input);
    //return this.authService.login(input.email, input.password)
  }

  @Post("register")
  async register(
    @Body() createUserDto: { email: string; password: string; userName: string }
  ) {
    //return this.authService.createUser(createUserDto.email, createUserDto.password);
  }
}
