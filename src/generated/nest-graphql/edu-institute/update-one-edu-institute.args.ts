import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EduInstituteUpdateInput } from './edu-institute-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';

@ArgsType()
export class UpdateOneEduInstituteArgs {

    @Field(() => EduInstituteUpdateInput, {nullable:false})
    @Type(() => EduInstituteUpdateInput)
    data!: EduInstituteUpdateInput;

    @Field(() => EduInstituteWhereUniqueInput, {nullable:false})
    @Type(() => EduInstituteWhereUniqueInput)
    where!: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;
}
