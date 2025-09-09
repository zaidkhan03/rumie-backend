import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateWithoutProductListingsInput } from './edu-institute-create-without-product-listings.input';

@InputType()
export class EduInstituteCreateOrConnectWithoutProductListingsInput {

    @Field(() => EduInstituteWhereUniqueInput, {nullable:false})
    @Type(() => EduInstituteWhereUniqueInput)
    where!: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;

    @Field(() => EduInstituteCreateWithoutProductListingsInput, {nullable:false})
    @Type(() => EduInstituteCreateWithoutProductListingsInput)
    create!: EduInstituteCreateWithoutProductListingsInput;
}
