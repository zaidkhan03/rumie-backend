import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ConversationCount {

    @Field(() => Int, {nullable:false})
    participants?: number;
}
