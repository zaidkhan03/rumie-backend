import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateWithoutStudentsInput } from './edu-institute-create-without-students.input';

@InputType()
export class EduInstituteCreateOrConnectWithoutStudentsInput {

    @Field(() => EduInstituteWhereUniqueInput, {nullable:false})
    @Type(() => EduInstituteWhereUniqueInput)
    where!: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;

    @Field(() => EduInstituteCreateWithoutStudentsInput, {nullable:false})
    @Type(() => EduInstituteCreateWithoutStudentsInput)
    create!: EduInstituteCreateWithoutStudentsInput;
}
