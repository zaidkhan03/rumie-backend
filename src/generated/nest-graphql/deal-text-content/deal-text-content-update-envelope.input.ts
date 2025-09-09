import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealTextContentCreateInput } from './deal-text-content-create.input';
import { Type } from 'class-transformer';
import { DealTextContentUpdateInput } from './deal-text-content-update.input';

@InputType()
export class DealTextContentUpdateEnvelopeInput {

    @Field(() => DealTextContentCreateInput, {nullable:true})
    @Type(() => DealTextContentCreateInput)
    set?: DealTextContentCreateInput;

    @Field(() => DealTextContentUpdateInput, {nullable:true})
    @Type(() => DealTextContentUpdateInput)
    update?: DealTextContentUpdateInput;
}
