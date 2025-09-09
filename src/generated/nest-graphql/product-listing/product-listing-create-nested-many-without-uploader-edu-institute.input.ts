import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutUploaderEduInstituteInput } from './product-listing-create-without-uploader-edu-institute.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutUploaderEduInstituteInput } from './product-listing-create-or-connect-without-uploader-edu-institute.input';
import { ProductListingCreateManyUploaderEduInstituteInputEnvelope } from './product-listing-create-many-uploader-edu-institute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';

@InputType()
export class ProductListingCreateNestedManyWithoutUploaderEduInstituteInput {

    @Field(() => [ProductListingCreateWithoutUploaderEduInstituteInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutUploaderEduInstituteInput)
    create?: Array<ProductListingCreateWithoutUploaderEduInstituteInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutUploaderEduInstituteInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutUploaderEduInstituteInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutUploaderEduInstituteInput>;

    @Field(() => ProductListingCreateManyUploaderEduInstituteInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyUploaderEduInstituteInputEnvelope)
    createMany?: ProductListingCreateManyUploaderEduInstituteInputEnvelope;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;
}
