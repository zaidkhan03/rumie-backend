import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Platform } from '../prisma/platform.enum';

@InputType()
export class UserSessionCreateInput {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => String, {nullable:true})
    pushToken?: string;

    @Field(() => String, {nullable:false})
    deviceModel!: string;

    @Field(() => Platform, {nullable:false})
    platform!: `${Platform}`;

    @Field(() => Boolean, {nullable:true})
    valid?: boolean;

    @Field(() => Date, {nullable:true})
    started?: Date | string;

    @Field(() => Date, {nullable:true})
    lastSeen?: Date | string;
}
