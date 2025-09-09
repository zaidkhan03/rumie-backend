import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersResolver } from "./users.resolver";
import { DataBaseModule } from "src/db/db.module";

@Module({
  imports: [DataBaseModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
