import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Platform } from './platform.enum';

@InputType()
export class UserSessionObjectEqualityInput {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => String, {nullable:true})
    pushToken?: string;

    @Field(() => String, {nullable:false})
    deviceModel!: string;

    @Field(() => Platform, {nullable:false})
    platform!: `${Platform}`;

    @Field(() => Boolean, {nullable:false})
    valid!: boolean;

    @Field(() => Date, {nullable:false})
    started!: Date | string;

    @Field(() => Date, {nullable:false})
    lastSeen!: Date | string;
}
