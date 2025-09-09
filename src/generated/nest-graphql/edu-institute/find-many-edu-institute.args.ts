import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EduInstituteWhereInput } from './edu-institute-where.input';
import { Type } from 'class-transformer';
import { EduInstituteOrderByWithRelationInput } from './edu-institute-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EduInstituteScalarFieldEnum } from './edu-institute-scalar-field.enum';

@ArgsType()
export class FindManyEduInstituteArgs {

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    where?: EduInstituteWhereInput;

    @Field(() => [EduInstituteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EduInstituteOrderByWithRelationInput>;

    @Field(() => EduInstituteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EduInstituteScalarFieldEnum], {nullable:true})
    distinct?: Array<`${EduInstituteScalarFieldEnum}`>;
}
