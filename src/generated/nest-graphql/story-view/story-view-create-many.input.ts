import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StoryViewCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    storyId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
