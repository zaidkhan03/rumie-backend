import { Module } from "@nestjs/common";
import { InstitutionService } from "./institution.service";
import { InstitutionResolver } from "./institution.resolver";
import { InstitutionController } from "./institution.controller";

@Module({
  providers: [InstitutionService, InstitutionResolver],
  controllers: [InstitutionController],
})
export class InstitutionModule {}
