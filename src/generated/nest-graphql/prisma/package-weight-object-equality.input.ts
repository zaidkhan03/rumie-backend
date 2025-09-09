import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class PackageWeightObjectEqualityInput {

    @Field(() => Float, {nullable:false})
    value!: number;

    @Field(() => String, {nullable:false})
    unit!: string;
}
