import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DealType } from '../prisma/deal-type.enum';

@ObjectType()
export class DealMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => DealType, {nullable:true})
    type?: `${DealType}`;

    @Field(() => String, {nullable:true})
    couponCode?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
