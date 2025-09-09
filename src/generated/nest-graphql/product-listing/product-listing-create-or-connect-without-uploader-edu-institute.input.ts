import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingCreateWithoutUploaderEduInstituteInput } from './product-listing-create-without-uploader-edu-institute.input';

@InputType()
export class ProductListingCreateOrConnectWithoutUploaderEduInstituteInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingCreateWithoutUploaderEduInstituteInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutUploaderEduInstituteInput)
    create!: ProductListingCreateWithoutUploaderEduInstituteInput;
}
