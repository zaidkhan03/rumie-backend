import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductBubbleCreateInput } from './product-bubble-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductBubbleCreateEnvelopeInput {

    @Field(() => ProductBubbleCreateInput, {nullable:true})
    @Type(() => ProductBubbleCreateInput)
    set?: ProductBubbleCreateInput;
}
