import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class PackageDimensionsCreateInput {

    @Field(() => Float, {nullable:false})
    height!: number;

    @Field(() => Float, {nullable:false})
    width!: number;

    @Field(() => Float, {nullable:false})
    length!: number;

    @Field(() => String, {nullable:true})
    unit?: string;
}
