import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LocalOrderUpdateMessage {

    @Field(() => String, {nullable:false})
    heading!: string;

    @Field(() => String, {nullable:false})
    description!: string;
}
