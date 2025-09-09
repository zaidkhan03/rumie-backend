import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class PackageWeightCreateInput {

    @Field(() => Float, {nullable:false})
    value!: number;

    @Field(() => String, {nullable:true})
    unit?: string;
}
