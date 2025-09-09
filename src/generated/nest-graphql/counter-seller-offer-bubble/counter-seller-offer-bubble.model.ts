import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CounterSellerOfferBubble {

    @Field(() => String, {nullable:false})
    headerText!: string;

    @Field(() => Float, {nullable:false})
    offerPrice!: number;
}
