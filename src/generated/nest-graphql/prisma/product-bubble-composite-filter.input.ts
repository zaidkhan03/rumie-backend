import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductBubbleObjectEqualityInput } from './product-bubble-object-equality.input';
import { ProductBubbleWhereInput } from '../product-bubble/product-bubble-where.input';

@InputType()
export class ProductBubbleCompositeFilter {

    @Field(() => ProductBubbleObjectEqualityInput, {nullable:true})
    equals?: ProductBubbleObjectEqualityInput;

    @Field(() => ProductBubbleWhereInput, {nullable:true})
    is?: ProductBubbleWhereInput;

    @Field(() => ProductBubbleWhereInput, {nullable:true})
    isNot?: ProductBubbleWhereInput;
}
