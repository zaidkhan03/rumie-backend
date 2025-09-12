import { Module } from "@nestjs/common";
import { UniversityAdminsService } from "./university-admins.service";
import { UniversityAdminsResolver } from "./university-admins.resolver";

@Module({
  providers: [UniversityAdminsResolver, UniversityAdminsService],
})
export class UniversityAdminsModule {}
