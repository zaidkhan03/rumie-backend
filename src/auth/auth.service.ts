import { ConflictException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthDto } from "./auth.dto";
import { RegisterInstitutionDto } from "./register.dto";
import { InstitutionDto } from "src/institution/dto/institution.dto";
import { CreateInstitutionWithIdInput } from "./createInstitutionWithIdInput.dto";
import { DatabaseService } from "src/db/db.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly db: DatabaseService
  ) {}

  async validateInstitution(slug: string, passCode: string): Promise<any> {
    const institution = await this.db.institution.findUnique({
      where: { slug },
    });
    if (institution && institution.passCode === passCode) {
      return institution;
    }
    return null;
  }

  async login(institution: any): Promise<AuthDto> {
    const payload = { id: institution.id, institutionSlug: institution.slug };
    const accessToken = this.jwtService.sign(payload, { expiresIn: "1y" });

    await this.db.institution.update({
      where: { id: institution.id },
      data: {
        sessions: {
          push: {
            token: accessToken,
            deviceModel: "Web",
            valid: true,
            started: new Date(),
            lastSeen: new Date(),
          },
        },
      },
    });
    return { accessToken };
  }

  async registerInstitution(data: RegisterInstitutionDto): Promise<AuthDto> {
    const existingInstitution = await this.db.institution.findUnique({
      where: { slug: data.slug },
    });
    if (existingInstitution) {
      throw new ConflictException("Institution already exists");
    }

    const newInstitution = await this.db.institution.create({
      data: {
        institutionName: data.institutionName,
        slug: data.slug,
        passCode: data.passCode,
        logo: data.logo,
        schoolColor: data.schoolColor,
      },
    });

    return this.login(newInstitution);
  }

  async createInstitutionWithId(
    data: CreateInstitutionWithIdInput
  ): Promise<InstitutionDto> {
    const existingInstitutions = await this.db.institution.findMany({
      where: {
        OR: [{ id: data.id }, { slug: data.slug }],
      },
    });
    if (existingInstitutions.length > 0) {
      throw new ConflictException(
        "Institution with the provided ID or slug already exists"
      );
    }

    const newInstitution = await this.db.institution.create({
      data: {
        id: data.id,
        institutionName: data.institutionName,
        slug: data.slug,
        passCode: data.passCode,
        logo: data.logo,
        schoolColor: data.schoolColor,
      },
    });

    return newInstitution;
  }
}
