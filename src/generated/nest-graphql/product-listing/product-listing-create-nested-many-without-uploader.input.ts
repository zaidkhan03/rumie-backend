import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutUploaderInput } from './product-listing-create-without-uploader.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutUploaderInput } from './product-listing-create-or-connect-without-uploader.input';
import { ProductListingCreateManyUploaderInputEnvelope } from './product-listing-create-many-uploader-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';

@InputType()
export class ProductListingCreateNestedManyWithoutUploaderInput {

    @Field(() => [ProductListingCreateWithoutUploaderInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutUploaderInput)
    create?: Array<ProductListingCreateWithoutUploaderInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutUploaderInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutUploaderInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutUploaderInput>;

    @Field(() => ProductListingCreateManyUploaderInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyUploaderInputEnvelope)
    createMany?: ProductListingCreateManyUploaderInputEnvelope;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;
}
