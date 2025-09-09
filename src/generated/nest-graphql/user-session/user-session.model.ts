import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Platform } from '../prisma/platform.enum';

@ObjectType()
export class UserSession {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => String, {nullable:true})
    pushToken!: string | null;

    @Field(() => String, {nullable:false})
    deviceModel!: string;

    @Field(() => Platform, {nullable:false})
    platform!: `${Platform}`;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    valid!: boolean;

    @Field(() => Date, {nullable:false})
    started!: Date;

    @Field(() => Date, {nullable:false})
    lastSeen!: Date;
}
