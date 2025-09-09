import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StoryPayloadMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}
