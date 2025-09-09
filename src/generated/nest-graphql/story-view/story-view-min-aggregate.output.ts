import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StoryViewMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    storyId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
