import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppLovingAdType } from '../prisma/app-loving-ad-type.enum';
import { AppLovinPosition } from '../prisma/app-lovin-position.enum';

@InputType()
export class AppLovinCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
