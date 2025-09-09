import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingCreateWithoutUploaderInput } from './product-listing-create-without-uploader.input';

@InputType()
export class ProductListingCreateOrConnectWithoutUploaderInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingCreateWithoutUploaderInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutUploaderInput)
    create!: ProductListingCreateWithoutUploaderInput;
}
