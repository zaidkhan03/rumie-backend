import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PackageDimensions {

    @Field(() => Float, {nullable:false})
    height!: number;

    @Field(() => Float, {nullable:false})
    width!: number;

    @Field(() => Float, {nullable:false})
    length!: number;

    @Field(() => String, {defaultValue:'inch',nullable:false})
    unit!: string;
}
