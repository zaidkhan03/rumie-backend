import { UsersService } from "./users.service";
import { Query, Resolver } from "@nestjs/graphql";
import { User } from "src/generated/nest-graphql/user/user.model";

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Query(() => [User])
  users(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }
}
