import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';

@ObjectType()
export class StoryReaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    storyId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:true})
    previousReactionId!: string | null;

    @Field(() => Date, {nullable:true})
    removedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
