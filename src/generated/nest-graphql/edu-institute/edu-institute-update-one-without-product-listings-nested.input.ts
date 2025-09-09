import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteCreateWithoutProductListingsInput } from './edu-institute-create-without-product-listings.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateOrConnectWithoutProductListingsInput } from './edu-institute-create-or-connect-without-product-listings.input';
import { EduInstituteUpsertWithoutProductListingsInput } from './edu-institute-upsert-without-product-listings.input';
import { EduInstituteWhereInput } from './edu-institute-where.input';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';
import { EduInstituteUpdateToOneWithWhereWithoutProductListingsInput } from './edu-institute-update-to-one-with-where-without-product-listings.input';

@InputType()
export class EduInstituteUpdateOneWithoutProductListingsNestedInput {

    @Field(() => EduInstituteCreateWithoutProductListingsInput, {nullable:true})
    @Type(() => EduInstituteCreateWithoutProductListingsInput)
    create?: EduInstituteCreateWithoutProductListingsInput;

    @Field(() => EduInstituteCreateOrConnectWithoutProductListingsInput, {nullable:true})
    @Type(() => EduInstituteCreateOrConnectWithoutProductListingsInput)
    connectOrCreate?: EduInstituteCreateOrConnectWithoutProductListingsInput;

    @Field(() => EduInstituteUpsertWithoutProductListingsInput, {nullable:true})
    @Type(() => EduInstituteUpsertWithoutProductListingsInput)
    upsert?: EduInstituteUpsertWithoutProductListingsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    delete?: EduInstituteWhereInput;

    @Field(() => EduInstituteWhereUniqueInput, {nullable:true})
    @Type(() => EduInstituteWhereUniqueInput)
    connect?: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;

    @Field(() => EduInstituteUpdateToOneWithWhereWithoutProductListingsInput, {nullable:true})
    @Type(() => EduInstituteUpdateToOneWithWhereWithoutProductListingsInput)
    update?: EduInstituteUpdateToOneWithWhereWithoutProductListingsInput;
}
