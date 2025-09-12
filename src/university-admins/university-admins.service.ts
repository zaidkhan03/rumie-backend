import { Injectable } from "@nestjs/common";
import mercurius from "mercurius";
import { UniversityAdmin, UniversityAdminType } from "src/---generated---";
import { DatabaseService } from "src/db/db.service";
import {
  CreateAdminInput,
  FindAdminByEmailInput,
  FindAdminByIdInput,
} from "./dto/university-admins.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UniversityAdminsService {
  constructor(private readonly db: DatabaseService) {}
  async createUniversityAdmin(input: CreateAdminInput) {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const data = {
      userType: UniversityAdminType.ADMIN,
      userName: "Demo",
      email: input.email,
      password: hashedPassword,
    };
    try {
      const admin = await this.db.universityAdmin.create({ data });
      return admin;
    } catch (e) {
      throw new mercurius.ErrorWithProps(
        "Could not create admin",
        { code: "ADMIN_CREATION_FAILED", reason: e.message },
        400
      );
    }
  }

  async findAdminById(input: FindAdminByIdInput): Promise<UniversityAdmin> {
    try {
      const admin = await this.db.universityAdmin.findUnique({
        where: { id: input.id },
      });
      if (!admin) {
        throw new mercurius.ErrorWithProps(
          "Couldnt fetch admin",
          { reason: "Admin with this Id does not exist" },
          404
        );
      }
      return admin;
    } catch (e) {
      throw new mercurius.ErrorWithProps(
        "Couldnt fetch admin",
        { reason: e.message },
        400
      );
    }
  }
  async findOneByEmail(input: FindAdminByEmailInput): Promise<UniversityAdmin> {
    try {
      const admin = await this.db.universityAdmin.findUnique({
        where: { email: input.email },
      });
      if (!admin) {
        throw new mercurius.ErrorWithProps(
          "Couldnt fetch admin",
          { reason: "Admin with this email does not exist" },
          404
        );
      }
      return admin;
    } catch (e) {
      throw new mercurius.ErrorWithProps(
        "Couldnt fetch admin",
        { reason: e.message },
        400
      );
    }
  }
}
