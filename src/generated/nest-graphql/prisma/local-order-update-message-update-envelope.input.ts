import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalOrderUpdateMessageCreateInput } from '../local-order-update-message/local-order-update-message-create.input';
import { Type } from 'class-transformer';
import { LocalOrderUpdateMessageUpdateInput } from '../local-order-update-message/local-order-update-message-update.input';

@InputType()
export class LocalOrderUpdateMessageUpdateEnvelopeInput {

    @Field(() => LocalOrderUpdateMessageCreateInput, {nullable:true})
    @Type(() => LocalOrderUpdateMessageCreateInput)
    set?: LocalOrderUpdateMessageCreateInput;

    @Field(() => LocalOrderUpdateMessageUpdateInput, {nullable:true})
    @Type(() => LocalOrderUpdateMessageUpdateInput)
    update?: LocalOrderUpdateMessageUpdateInput;
}
