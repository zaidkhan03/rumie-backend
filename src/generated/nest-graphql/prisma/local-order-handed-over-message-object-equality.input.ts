import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LocalOrderHandedOverMessageObjectEqualityInput {

    @Field(() => String, {nullable:false})
    buyerHeading!: string;

    @Field(() => String, {nullable:false})
    buyerDescription!: string;

    @Field(() => String, {nullable:false})
    sellerHeading!: string;

    @Field(() => String, {nullable:false})
    sellerDescription!: string;
}
