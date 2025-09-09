import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChatBubblesMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}
