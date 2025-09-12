import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UniversityAdminsService } from "./university-admins.service";
import {
  CreateAdminInput,
  FindAdminByEmailInput,
  FindAdminByIdInput,
} from "./dto/university-admins.dto";
import { UniversityAdmin } from "src/---generated---";

@Resolver()
export class UniversityAdminsResolver {
  constructor(
    private readonly universityAdminsService: UniversityAdminsService
  ) {}

  @Mutation(() => UniversityAdmin)
  async createUniversityAdmin(@Args("input") input: CreateAdminInput) {
    return this.universityAdminsService.createUniversityAdmin(input);
  }

  @Query(() => UniversityAdmin)
  async findAdminById(@Args("input") input: FindAdminByIdInput) {
    return this.universityAdminsService.findAdminById(input);
  }
  @Query(() => UniversityAdmin)
  async findAdminByEmail(@Args("input") input: FindAdminByEmailInput) {
    return this.universityAdminsService.findOneByEmail(input);
  }
}
