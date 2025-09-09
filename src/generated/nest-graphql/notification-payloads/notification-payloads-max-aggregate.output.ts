import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NotificationPayloadsMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}
