import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RentalNotificationPayloadCreateInput } from './rental-notification-payload-create.input';
import { Type } from 'class-transformer';
import { RentalNotificationPayloadUpdateInput } from './rental-notification-payload-update.input';

@InputType()
export class RentalNotificationPayloadUpdateEnvelopeInput {

    @Field(() => RentalNotificationPayloadCreateInput, {nullable:true})
    @Type(() => RentalNotificationPayloadCreateInput)
    set?: RentalNotificationPayloadCreateInput;

    @Field(() => RentalNotificationPayloadUpdateInput, {nullable:true})
    @Type(() => RentalNotificationPayloadUpdateInput)
    update?: RentalNotificationPayloadUpdateInput;
}
