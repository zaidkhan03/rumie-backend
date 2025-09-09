import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalOrderUpdateMessageCreateInput } from './local-order-update-message-create.input';
import { Type } from 'class-transformer';

@InputType()
export class LocalOrderUpdateMessageCreateEnvelopeInput {

    @Field(() => LocalOrderUpdateMessageCreateInput, {nullable:true})
    @Type(() => LocalOrderUpdateMessageCreateInput)
    set?: LocalOrderUpdateMessageCreateInput;
}
