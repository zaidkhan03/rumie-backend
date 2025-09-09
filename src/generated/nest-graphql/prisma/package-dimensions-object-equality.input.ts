import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class PackageDimensionsObjectEqualityInput {

    @Field(() => Float, {nullable:false})
    height!: number;

    @Field(() => Float, {nullable:false})
    width!: number;

    @Field(() => Float, {nullable:false})
    length!: number;

    @Field(() => String, {nullable:false})
    unit!: string;
}
