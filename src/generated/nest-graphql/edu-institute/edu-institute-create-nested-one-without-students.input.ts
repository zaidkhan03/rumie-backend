import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteCreateWithoutStudentsInput } from './edu-institute-create-without-students.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateOrConnectWithoutStudentsInput } from './edu-institute-create-or-connect-without-students.input';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';

@InputType()
export class EduInstituteCreateNestedOneWithoutStudentsInput {

    @Field(() => EduInstituteCreateWithoutStudentsInput, {nullable:true})
    @Type(() => EduInstituteCreateWithoutStudentsInput)
    create?: EduInstituteCreateWithoutStudentsInput;

    @Field(() => EduInstituteCreateOrConnectWithoutStudentsInput, {nullable:true})
    @Type(() => EduInstituteCreateOrConnectWithoutStudentsInput)
    connectOrCreate?: EduInstituteCreateOrConnectWithoutStudentsInput;

    @Field(() => EduInstituteWhereUniqueInput, {nullable:true})
    @Type(() => EduInstituteWhereUniqueInput)
    connect?: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;
}
