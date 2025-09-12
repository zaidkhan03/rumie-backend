import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { AuthDto } from "./auth.dto";
import { RegisterInstitutionDto } from "./register.dto";
import { LoginInstitutionDto } from "./login-institution.dto";
import { InstitutionDto } from "src/institution/dto/institution.dto";
import { CreateInstitutionWithIdInput } from "./createInstitutionWithIdInput.dto";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthDto)
  async registerInstitution(
    @Args("registerInstitutionDto")
    registerInstitutionDto: RegisterInstitutionDto
  ): Promise<AuthDto> {
    return this.authService.registerInstitution(registerInstitutionDto);
  }

  @Mutation(() => AuthDto)
  async loginInstitution(
    @Args("loginInstitutionDto") loginInstitutionDto: LoginInstitutionDto
  ): Promise<AuthDto> {
    const institution = await this.authService.validateInstitution(
      loginInstitutionDto.slug,
      loginInstitutionDto.passCode
    );
    if (!institution) {
      throw new Error("Invalid credentials");
    }
    return this.authService.login(institution);
  }

  @Mutation(() => InstitutionDto)
  async createInstitutionWithId(
    @Args("input") input: CreateInstitutionWithIdInput
  ): Promise<InstitutionDto> {
    return this.authService.createInstitutionWithId(input);
  }
}
