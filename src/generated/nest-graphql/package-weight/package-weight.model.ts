import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PackageWeight {

    @Field(() => Float, {nullable:false})
    value!: number;

    @Field(() => String, {defaultValue:'ounce',nullable:false})
    unit!: string;
}
