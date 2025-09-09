import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PushNotificationData {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => String, {nullable:true})
    cardImage!: string | null;
}
