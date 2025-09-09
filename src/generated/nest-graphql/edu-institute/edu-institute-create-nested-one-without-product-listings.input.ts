import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteCreateWithoutProductListingsInput } from './edu-institute-create-without-product-listings.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateOrConnectWithoutProductListingsInput } from './edu-institute-create-or-connect-without-product-listings.input';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';

@InputType()
export class EduInstituteCreateNestedOneWithoutProductListingsInput {

    @Field(() => EduInstituteCreateWithoutProductListingsInput, {nullable:true})
    @Type(() => EduInstituteCreateWithoutProductListingsInput)
    create?: EduInstituteCreateWithoutProductListingsInput;

    @Field(() => EduInstituteCreateOrConnectWithoutProductListingsInput, {nullable:true})
    @Type(() => EduInstituteCreateOrConnectWithoutProductListingsInput)
    connectOrCreate?: EduInstituteCreateOrConnectWithoutProductListingsInput;

    @Field(() => EduInstituteWhereUniqueInput, {nullable:true})
    @Type(() => EduInstituteWhereUniqueInput)
    connect?: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;
}
