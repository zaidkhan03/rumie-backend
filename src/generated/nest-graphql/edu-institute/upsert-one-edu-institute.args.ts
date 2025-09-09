import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateInput } from './edu-institute-create.input';
import { EduInstituteUpdateInput } from './edu-institute-update.input';

@ArgsType()
export class UpsertOneEduInstituteArgs {

    @Field(() => EduInstituteWhereUniqueInput, {nullable:false})
    @Type(() => EduInstituteWhereUniqueInput)
    where!: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;

    @Field(() => EduInstituteCreateInput, {nullable:false})
    @Type(() => EduInstituteCreateInput)
    create!: EduInstituteCreateInput;

    @Field(() => EduInstituteUpdateInput, {nullable:false})
    @Type(() => EduInstituteUpdateInput)
    update!: EduInstituteUpdateInput;
}
