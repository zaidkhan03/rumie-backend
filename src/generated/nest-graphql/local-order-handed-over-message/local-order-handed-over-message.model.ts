import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LocalOrderHandedOverMessage {

    @Field(() => String, {nullable:false})
    buyerHeading!: string;

    @Field(() => String, {nullable:false})
    buyerDescription!: string;

    @Field(() => String, {nullable:false})
    sellerHeading!: string;

    @Field(() => String, {nullable:false})
    sellerDescription!: string;
}
