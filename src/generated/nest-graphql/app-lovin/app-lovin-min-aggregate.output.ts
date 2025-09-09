import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AppLovingAdType } from '../prisma/app-loving-ad-type.enum';
import { AppLovinPosition } from '../prisma/app-lovin-position.enum';

@ObjectType()
export class AppLovinMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    alias?: string;

    @Field(() => String, {nullable:true})
    adUnitId?: string;

    @Field(() => AppLovingAdType, {nullable:true})
    type?: `${AppLovingAdType}`;

    @Field(() => AppLovinPosition, {nullable:true})
    position?: `${AppLovinPosition}`;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
