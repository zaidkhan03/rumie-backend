import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DealTextContent {

    @Field(() => String, {defaultValue:'',nullable:false})
    heading!: string;

    @Field(() => String, {defaultValue:'',nullable:false})
    paragraph!: string;

    @Field(() => String, {defaultValue:'',nullable:false})
    pointers!: string;
}
