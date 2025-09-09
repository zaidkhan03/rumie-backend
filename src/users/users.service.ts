import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/db/db.service";

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}
  async getAllUsers() {
    return this.db.user.findMany();
  }
}
