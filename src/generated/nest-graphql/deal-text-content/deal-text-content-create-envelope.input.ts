import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealTextContentCreateInput } from './deal-text-content-create.input';
import { Type } from 'class-transformer';

@InputType()
export class DealTextContentCreateEnvelopeInput {

    @Field(() => DealTextContentCreateInput, {nullable:true})
    @Type(() => DealTextContentCreateInput)
    set?: DealTextContentCreateInput;
}
