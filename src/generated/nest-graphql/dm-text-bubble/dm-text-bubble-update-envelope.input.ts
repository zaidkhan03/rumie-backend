import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMTextBubbleCreateInput } from './dm-text-bubble-create.input';
import { Type } from 'class-transformer';
import { DMTextBubbleUpdateInput } from './dm-text-bubble-update.input';

@InputType()
export class DMTextBubbleUpdateEnvelopeInput {

    @Field(() => DMTextBubbleCreateInput, {nullable:true})
    @Type(() => DMTextBubbleCreateInput)
    set?: DMTextBubbleCreateInput;

    @Field(() => DMTextBubbleUpdateInput, {nullable:true})
    @Type(() => DMTextBubbleUpdateInput)
    update?: DMTextBubbleUpdateInput;
}
