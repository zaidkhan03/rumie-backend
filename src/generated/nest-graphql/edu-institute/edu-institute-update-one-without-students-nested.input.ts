import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteCreateWithoutStudentsInput } from './edu-institute-create-without-students.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateOrConnectWithoutStudentsInput } from './edu-institute-create-or-connect-without-students.input';
import { EduInstituteUpsertWithoutStudentsInput } from './edu-institute-upsert-without-students.input';
import { EduInstituteWhereInput } from './edu-institute-where.input';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';
import { EduInstituteUpdateToOneWithWhereWithoutStudentsInput } from './edu-institute-update-to-one-with-where-without-students.input';

@InputType()
export class EduInstituteUpdateOneWithoutStudentsNestedInput {

    @Field(() => EduInstituteCreateWithoutStudentsInput, {nullable:true})
    @Type(() => EduInstituteCreateWithoutStudentsInput)
    create?: EduInstituteCreateWithoutStudentsInput;

    @Field(() => EduInstituteCreateOrConnectWithoutStudentsInput, {nullable:true})
    @Type(() => EduInstituteCreateOrConnectWithoutStudentsInput)
    connectOrCreate?: EduInstituteCreateOrConnectWithoutStudentsInput;

    @Field(() => EduInstituteUpsertWithoutStudentsInput, {nullable:true})
    @Type(() => EduInstituteUpsertWithoutStudentsInput)
    upsert?: EduInstituteUpsertWithoutStudentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    delete?: EduInstituteWhereInput;

    @Field(() => EduInstituteWhereUniqueInput, {nullable:true})
    @Type(() => EduInstituteWhereUniqueInput)
    connect?: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;

    @Field(() => EduInstituteUpdateToOneWithWhereWithoutStudentsInput, {nullable:true})
    @Type(() => EduInstituteUpdateToOneWithWhereWithoutStudentsInput)
    update?: EduInstituteUpdateToOneWithWhereWithoutStudentsInput;
}
