import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateSystemMessageCreateInput } from '../order-update-system-message/order-update-system-message-create.input';
import { Type } from 'class-transformer';
import { OrderUpdateSystemMessageUpdateInput } from '../order-update-system-message/order-update-system-message-update.input';

@InputType()
export class OrderUpdateSystemMessageUpdateEnvelopeInput {

    @Field(() => OrderUpdateSystemMessageCreateInput, {nullable:true})
    @Type(() => OrderUpdateSystemMessageCreateInput)
    set?: OrderUpdateSystemMessageCreateInput;

    @Field(() => OrderUpdateSystemMessageUpdateInput, {nullable:true})
    @Type(() => OrderUpdateSystemMessageUpdateInput)
    update?: OrderUpdateSystemMessageUpdateInput;
}
