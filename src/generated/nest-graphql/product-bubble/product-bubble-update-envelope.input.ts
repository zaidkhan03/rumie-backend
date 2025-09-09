import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductBubbleCreateInput } from './product-bubble-create.input';
import { Type } from 'class-transformer';
import { ProductBubbleUpdateInput } from './product-bubble-update.input';

@InputType()
export class ProductBubbleUpdateEnvelopeInput {

    @Field(() => ProductBubbleCreateInput, {nullable:true})
    @Type(() => ProductBubbleCreateInput)
    set?: ProductBubbleCreateInput;

    @Field(() => ProductBubbleUpdateInput, {nullable:true})
    @Type(() => ProductBubbleUpdateInput)
    update?: ProductBubbleUpdateInput;
}
