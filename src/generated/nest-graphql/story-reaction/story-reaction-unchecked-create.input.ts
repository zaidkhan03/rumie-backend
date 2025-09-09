import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';

@InputType()
export class StoryReactionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    storyId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    previousReactionId?: string;

    @Field(() => Date, {nullable:true})
    removedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
