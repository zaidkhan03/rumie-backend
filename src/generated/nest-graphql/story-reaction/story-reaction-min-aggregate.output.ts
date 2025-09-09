import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';

@ObjectType()
export class StoryReactionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    storyId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => ReactionType, {nullable:true})
    type?: `${ReactionType}`;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    previousReactionId?: string;

    @Field(() => Date, {nullable:true})
    removedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
