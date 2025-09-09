import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueEduInstituteOrThrowArgs {

    @Field(() => EduInstituteWhereUniqueInput, {nullable:false})
    @Type(() => EduInstituteWhereUniqueInput)
    where!: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;
}
