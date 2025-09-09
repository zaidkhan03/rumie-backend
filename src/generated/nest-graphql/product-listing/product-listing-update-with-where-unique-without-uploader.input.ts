import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingUpdateWithoutUploaderInput } from './product-listing-update-without-uploader.input';

@InputType()
export class ProductListingUpdateWithWhereUniqueWithoutUploaderInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingUpdateWithoutUploaderInput, {nullable:false})
    @Type(() => ProductListingUpdateWithoutUploaderInput)
    data!: ProductListingUpdateWithoutUploaderInput;
}
