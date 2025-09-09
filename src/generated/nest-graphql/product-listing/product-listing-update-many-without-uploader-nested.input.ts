import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateWithoutUploaderInput } from './product-listing-create-without-uploader.input';
import { Type } from 'class-transformer';
import { ProductListingCreateOrConnectWithoutUploaderInput } from './product-listing-create-or-connect-without-uploader.input';
import { ProductListingUpsertWithWhereUniqueWithoutUploaderInput } from './product-listing-upsert-with-where-unique-without-uploader.input';
import { ProductListingCreateManyUploaderInputEnvelope } from './product-listing-create-many-uploader-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductListingWhereUniqueInput } from './product-listing-where-unique.input';
import { ProductListingUpdateWithWhereUniqueWithoutUploaderInput } from './product-listing-update-with-where-unique-without-uploader.input';
import { ProductListingUpdateManyWithWhereWithoutUploaderInput } from './product-listing-update-many-with-where-without-uploader.input';
import { ProductListingScalarWhereInput } from './product-listing-scalar-where.input';

@InputType()
export class ProductListingUpdateManyWithoutUploaderNestedInput {

    @Field(() => [ProductListingCreateWithoutUploaderInput], {nullable:true})
    @Type(() => ProductListingCreateWithoutUploaderInput)
    create?: Array<ProductListingCreateWithoutUploaderInput>;

    @Field(() => [ProductListingCreateOrConnectWithoutUploaderInput], {nullable:true})
    @Type(() => ProductListingCreateOrConnectWithoutUploaderInput)
    connectOrCreate?: Array<ProductListingCreateOrConnectWithoutUploaderInput>;

    @Field(() => [ProductListingUpsertWithWhereUniqueWithoutUploaderInput], {nullable:true})
    @Type(() => ProductListingUpsertWithWhereUniqueWithoutUploaderInput)
    upsert?: Array<ProductListingUpsertWithWhereUniqueWithoutUploaderInput>;

    @Field(() => ProductListingCreateManyUploaderInputEnvelope, {nullable:true})
    @Type(() => ProductListingCreateManyUploaderInputEnvelope)
    createMany?: ProductListingCreateManyUploaderInputEnvelope;

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

    @Field(() => [ProductListingUpdateWithWhereUniqueWithoutUploaderInput], {nullable:true})
    @Type(() => ProductListingUpdateWithWhereUniqueWithoutUploaderInput)
    update?: Array<ProductListingUpdateWithWhereUniqueWithoutUploaderInput>;

    @Field(() => [ProductListingUpdateManyWithWhereWithoutUploaderInput], {nullable:true})
    @Type(() => ProductListingUpdateManyWithWhereWithoutUploaderInput)
    updateMany?: Array<ProductListingUpdateManyWithWhereWithoutUploaderInput>;

    @Field(() => [ProductListingScalarWhereInput], {nullable:true})
    @Type(() => ProductListingScalarWhereInput)
    deleteMany?: Array<ProductListingScalarWhereInput>;
}
