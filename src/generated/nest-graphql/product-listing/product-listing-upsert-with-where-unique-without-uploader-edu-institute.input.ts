import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { Type } from 'class-transformer';
import { ProductListingUpdateWithoutUploaderEduInstituteInput } from './product-listing-update-without-uploader-edu-institute.input';
import { ProductListingCreateWithoutUploaderEduInstituteInput } from './product-listing-create-without-uploader-edu-institute.input';

@InputType()
export class ProductListingUpsertWithWhereUniqueWithoutUploaderEduInstituteInput {

    @Field(() => ProductListingWhereUniqueInput, {nullable:false})
    @Type(() => ProductListingWhereUniqueInput)
    where!: Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>;

    @Field(() => ProductListingUpdateWithoutUploaderEduInstituteInput, {nullable:false})
    @Type(() => ProductListingUpdateWithoutUploaderEduInstituteInput)
    update!: ProductListingUpdateWithoutUploaderEduInstituteInput;

    @Field(() => ProductListingCreateWithoutUploaderEduInstituteInput, {nullable:false})
    @Type(() => ProductListingCreateWithoutUploaderEduInstituteInput)
    create!: ProductListingCreateWithoutUploaderEduInstituteInput;
}
