import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentalNotificationPayloadCreateInput } from './rental-notification-payload-create.input';
import { Type } from 'class-transformer';

@InputType()
export class RentalNotificationPayloadCreateEnvelopeInput {

    @Field(() => RentalNotificationPayloadCreateInput, {nullable:true})
    @Type(() => RentalNotificationPayloadCreateInput)
    set?: RentalNotificationPayloadCreateInput;
}
