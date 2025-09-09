import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminSessionObjectEqualityInput {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Boolean, {nullable:false})
    valid!: boolean;

    @Field(() => Date, {nullable:false})
    started!: Date | string;

    @Field(() => Date, {nullable:false})
    lastSeen!: Date | string;
}
