import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class LoginInstitutionDto {
  @Field()
  @IsNotEmpty()
  slug: string;

  @Field()
  @IsNotEmpty()
  passCode: string;
}
