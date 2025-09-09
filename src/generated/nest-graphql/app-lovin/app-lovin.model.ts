import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AppLovingAdType } from '../prisma/app-loving-ad-type.enum';
import { AppLovinPosition } from '../prisma/app-lovin-position.enum';

@ObjectType()
export class AppLovin {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    alias!: string;

    @Field(() => String, {nullable:false})
    adUnitId!: string;

    @Field(() => AppLovingAdType, {nullable:false})
    type!: `${AppLovingAdType}`;

    @Field(() => AppLovinPosition, {nullable:false})
    position!: `${AppLovinPosition}`;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
