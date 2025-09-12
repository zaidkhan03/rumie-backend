import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InstitutionDto } from "./dto/institution.dto";
import { UpdateInstitutionSettingInput } from "./dto/update-institution-setting.input";
import { Institution } from "@prisma/client";
import { GenderWise, UniversityStats } from "./dto/university-stats.dto";
import { RegisterInstitutionDto } from "src/auth/register.dto";
import { DatabaseService } from "src/db/db.service";

@Injectable()
export class InstitutionService {
  constructor(private db: DatabaseService) {}

  async getInstitutionBySlug(slug: string): Promise<InstitutionDto> {
    return this.db.institution.findUnique({
      where: { slug },
    });
  }

  async getInstitutionById(institutionId: string): Promise<InstitutionDto> {
    const institution = await this.db.institution.findUnique({
      where: { id: institutionId },
    });

    if (!institution) {
      throw new NotFoundException(
        `Institution with ID ${institutionId} not found`
      );
    }

    return institution;
  }

  async getInstitutionList(): Promise<InstitutionDto[]> {
    const institutions = await this.db.institution.findMany();
    return institutions.map((institution) => {
      const { sessions, ...institutionWithoutUnwantedProperties } = institution;
      return institutionWithoutUnwantedProperties;
    });
  }

  async updateInstitutionSetting(
    id: string,
    data: UpdateInstitutionSettingInput
  ): Promise<Institution> {
    const institutionSetting = await this.db.institution.findUnique({
      where: { id },
    });

    if (!institutionSetting) {
      throw new NotFoundException(`InstitutionSetting with ID ${id} not found`);
    }

    return this.db.institution.update({
      where: { id },
      data,
    });
  }

  async getUniversityStats(): Promise<UniversityStats> {
    let results = new UniversityStats();
    results.impression = [100, 200, 300, 400];
    results.genderWise = {
      male: 4000,
      female: 5000,
    } as GenderWise;
    results.listing = 500000;
    results.totalCampaign = 1000000;
    return results;
  }

  async createInstitution(
    registerInstitutionDto: RegisterInstitutionDto
  ): Promise<InstitutionDto> {
    try {
      const newInstitution = await this.db.institution.create({
        data: registerInstitutionDto,
      });
      const { sessions, ...institutionWithoutUnwantedProperties } =
        newInstitution;
      return institutionWithoutUnwantedProperties;
    } catch (error) {
      if (error.code === "P2002" && error.meta?.target.includes("slug")) {
        throw new ConflictException("The slug provided already exists.");
      }
      throw error;
    }
  }
}
