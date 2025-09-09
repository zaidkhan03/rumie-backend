import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeaturedProductCategoryNullableCreateEnvelopeInput } from '../prisma/featured-product-category-nullable-create-envelope.input';
import { ProductCategoryAppFiltersCreateInput } from '../product-category-app-filters/product-category-app-filters-create.input';
import { PreferredGender } from '../prisma/preferred-gender.enum';
import { ProductCategoryCreateNestedOneWithoutChildrenInput } from './product-category-create-nested-one-without-children.input';
import { ProductCategoryCreateNestedManyWithoutParentInput } from './product-category-create-nested-many-without-parent.input';

@InputType()
export class ProductCategoryCreateWithoutProductListingsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => FeaturedProductCategoryNullableCreateEnvelopeInput, {nullable:true})
    featured?: FeaturedProductCategoryNullableCreateEnvelopeInput;

    @Field(() => [ProductCategoryAppFiltersCreateInput], {nullable:true})
    filters?: Array<ProductCategoryAppFiltersCreateInput>;

    @Field(() => PreferredGender, {nullable:true})
    preferredGender?: `${PreferredGender}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Boolean, {nullable:true})
    shippable?: boolean;

    @Field(() => ProductCategoryCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: ProductCategoryCreateNestedOneWithoutChildrenInput;

    @Field(() => ProductCategoryCreateNestedManyWithoutParentInput, {nullable:true})
    children?: ProductCategoryCreateNestedManyWithoutParentInput;
}
