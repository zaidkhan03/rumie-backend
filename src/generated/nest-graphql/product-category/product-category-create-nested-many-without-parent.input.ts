import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateWithoutParentInput } from './product-category-create-without-parent.input';
import { Type } from 'class-transformer';
import { ProductCategoryCreateOrConnectWithoutParentInput } from './product-category-create-or-connect-without-parent.input';
import { ProductCategoryCreateManyParentInputEnvelope } from './product-category-create-many-parent-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input';

@InputType()
export class ProductCategoryCreateNestedManyWithoutParentInput {

    @Field(() => [ProductCategoryCreateWithoutParentInput], {nullable:true})
    @Type(() => ProductCategoryCreateWithoutParentInput)
    create?: Array<ProductCategoryCreateWithoutParentInput>;

    @Field(() => [ProductCategoryCreateOrConnectWithoutParentInput], {nullable:true})
    @Type(() => ProductCategoryCreateOrConnectWithoutParentInput)
    connectOrCreate?: Array<ProductCategoryCreateOrConnectWithoutParentInput>;

    @Field(() => ProductCategoryCreateManyParentInputEnvelope, {nullable:true})
    @Type(() => ProductCategoryCreateManyParentInputEnvelope)
    createMany?: ProductCategoryCreateManyParentInputEnvelope;

    @Field(() => [ProductCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductCategoryWhereUniqueInput, 'id'>>;
}
