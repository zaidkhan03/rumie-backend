import {
  User,
  UserOrderByWithRelationInput,
  UserWhereInput,
} from "src/---generated---";
import { UsersService } from "./users.service";
import { Args, Int, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Query(() => [User])
  users(
    @Args("where", { nullable: true }) where?: UserWhereInput,
    @Args("take", { type: () => Int, nullable: true }) take?: number,
    @Args("skip", { type: () => Int, nullable: true }) skip?: number,
    @Args("orderBy", { nullable: true }) orderBy?: UserOrderByWithRelationInput
  ) {
    return this.usersService.getAllUsers(where, take, skip, orderBy);
  }
}
