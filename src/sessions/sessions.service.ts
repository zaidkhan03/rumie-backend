import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/db/db.service";

@Injectable()
export class SessionsService {
  constructor(private readonly db: DatabaseService) {}

  async createSession() {
    //   const token = this.jwtService.generateSessionToken()
    const data = {
      token: "12",
      deviceModel: "iphone",
      valid: true,
    };
  }
}
