import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMTextBubbleCreateInput } from './dm-text-bubble-create.input';
import { Type } from 'class-transformer';

@InputType()
export class DMTextBubbleCreateEnvelopeInput {

    @Field(() => DMTextBubbleCreateInput, {nullable:true})
    @Type(() => DMTextBubbleCreateInput)
    set?: DMTextBubbleCreateInput;
}
