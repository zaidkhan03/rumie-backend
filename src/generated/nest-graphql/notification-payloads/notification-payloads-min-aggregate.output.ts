import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NotificationPayloadsMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}
