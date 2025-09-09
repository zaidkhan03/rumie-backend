import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMTextBubbleObjectEqualityInput } from './dm-text-bubble-object-equality.input';
import { DMTextBubbleWhereInput } from '../dm-text-bubble/dm-text-bubble-where.input';

@InputType()
export class DMTextBubbleCompositeFilter {

    @Field(() => DMTextBubbleObjectEqualityInput, {nullable:true})
    equals?: DMTextBubbleObjectEqualityInput;

    @Field(() => DMTextBubbleWhereInput, {nullable:true})
    is?: DMTextBubbleWhereInput;

    @Field(() => DMTextBubbleWhereInput, {nullable:true})
    isNot?: DMTextBubbleWhereInput;
}
