import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductListingMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    categoryId?: true;

    @Field(() => Boolean, {nullable:true})
    brandId?: true;

    @Field(() => Boolean, {nullable:true})
    colorId?: true;

    @Field(() => Boolean, {nullable:true})
    productCondition?: true;

    @Field(() => Boolean, {nullable:true})
    productDeliveryMode?: true;

    @Field(() => Boolean, {nullable:true})
    shippingChargePayer?: true;

    @Field(() => Boolean, {nullable:true})
    weightCategoryId?: true;

    @Field(() => Boolean, {nullable:true})
    uploaderId?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    priceString?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    reasonForSelling?: true;

    @Field(() => Boolean, {nullable:true})
    shippingEnabled?: true;

    @Field(() => Boolean, {nullable:true})
    shippingFrom?: true;

    @Field(() => Boolean, {nullable:true})
    active?: true;

    @Field(() => Boolean, {nullable:true})
    soldOut?: true;

    @Field(() => Boolean, {nullable:true})
    blackListed?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    legacyHash?: true;

    @Field(() => Boolean, {nullable:true})
    archived?: true;

    @Field(() => Boolean, {nullable:true})
    categoryPreferredGender?: true;

    @Field(() => Boolean, {nullable:true})
    uploaderEduInstituteId?: true;
}
