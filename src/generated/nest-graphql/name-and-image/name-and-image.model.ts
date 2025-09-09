import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NameAndImage {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;
}
