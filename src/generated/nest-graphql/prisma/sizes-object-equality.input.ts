import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SizesObjectEqualityInput {

    @Field(() => String, {nullable:false})
    shoes!: string;

    @Field(() => String, {nullable:false})
    upperWear!: string;

    @Field(() => String, {nullable:false})
    lowerWear!: string;
}
