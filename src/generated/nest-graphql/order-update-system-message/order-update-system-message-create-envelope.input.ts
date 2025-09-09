import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateSystemMessageCreateInput } from './order-update-system-message-create.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderUpdateSystemMessageCreateEnvelopeInput {

    @Field(() => OrderUpdateSystemMessageCreateInput, {nullable:true})
    @Type(() => OrderUpdateSystemMessageCreateInput)
    set?: OrderUpdateSystemMessageCreateInput;
}
