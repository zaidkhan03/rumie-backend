import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutUploaderEduInstituteInput } from './product-listing-create-without-uploader-edu-institute.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutUploaderEduInstituteInput } from './product-listing-create-or-connect-without-uploader-edu-institute.input';
import { ProductListingUpsertWithWhereUniqueWithoutUploaderEduInstituteInput } from './product-listing-upsert-with-where-unique-without-uploader-edu-institute.input';
import { ProductListingCreateManyUploaderEduInstituteInputEnvelope } from './product-listing-create-many-uploader-edu-institute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { ProductListingUpdateWithWhereUniqueWithoutUploaderEduInstituteInput } from './product-listing-update-with-where-unique-without-uploader-edu-institute.input';
import { ProductListingUpdateManyWithWhereWithoutUploaderEduInstituteInput } from './product-listing-update-many-with-where-without-uploader-edu-institute.input';
import { ProductListingScalarWhereInput } from './product-listing-scalar-where.input';

@InputType()
export class ProductListingUncheckedUpdateManyWithoutUploaderEduInstituteNestedInput {

    @Field(() => [ProductListingCreateWithoutUploaderEduInstituteInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutUploaderEduInstituteInput)
    create?: Array<ProductListingCreateWithoutUploaderEduInstituteInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutUploaderEduInstituteInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutUploaderEduInstituteInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutUploaderEduInstituteInput>;

    @Field(() => [ProductListingUpsertWithWhereUniqueWithoutUploaderEduInstituteInput], {nullable:true})
    @Type(() => ProductListingUpsertWithWhereUniqueWithoutUploaderEduInstituteInput)
    upsert?: Array<ProductListingUpsertWithWhereUniqueWithoutUploaderEduInstituteInput>;

    @Field(() => ProductListingCreateManyUploaderEduInstituteInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyUploaderEduInstituteInputEnvelope)
    createMany?: ProductListingCreateManyUploaderEduInstituteInputEnvelope;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingWhereUniqueInput], {nullable:true})
    @Type(() => ProductListingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductListingWhereUniqueInput, 'id'>>;

    @Field(() => [ProductListingUpdateWithWhereUniqueWithoutUploaderEduInstituteInput], {nullable:true})
    @Type(() => ProductListingUpdateWithWhereUniqueWithoutUploaderEduInstituteInput)
    update?: Array<ProductListingUpdateWithWhereUniqueWithoutUploaderEduInstituteInput>;

    @Field(() => [ProductListingUpdateManyWithWhereWithoutUploaderEduInstituteInput], {nullable:true})
    @Type(() => ProductListingUpdateManyWithWhereWithoutUploaderEduInstituteInput)
    updateMany?: Array<ProductListingUpdateManyWithWhereWithoutUploaderEduInstituteInput>;

    @Field(() => [ProductListingScalarWhereInput], {nullable:true})
    @Type(() => ProductListingScalarWhereInput)
    deleteMany?: Array<ProductListingScalarWhereInput>;
}
