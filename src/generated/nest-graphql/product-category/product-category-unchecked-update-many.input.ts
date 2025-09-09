import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FeaturedProductCategoryNullableUpdateEnvelopeInput } from '../prisma/featured-product-category-nullable-update-envelope.input';
import { ProductCategoryAppFiltersCreateInput } from '../product-category-app-filters/product-category-app-filters-create.input';
import { NullableEnumPreferredGenderFieldUpdateOperationsInput } from '../prisma/nullable-enum-preferred-gender-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';

@InputType()
export class ProductCategoryUncheckedUpdateManyInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    parentId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FeaturedProductCategoryNullableUpdateEnvelopeInput, {nullable:true})
    featured?: FeaturedProductCategoryNullableUpdateEnvelopeInput;

    @Field(() => [ProductCategoryAppFiltersCreateInput], {nullable:true})
    filters?: Array<ProductCategoryAppFiltersCreateInput>;

    @Field(() => NullableEnumPreferredGenderFieldUpdateOperationsInput, {nullable:true})
    preferredGender?: NullableEnumPreferredGenderFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    shippable?: BoolFieldUpdateOperationsInput;
}
