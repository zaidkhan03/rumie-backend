import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryReactionWhereInput } from './story-reaction-where.input';
import { Type } from 'class-transformer';
import { StoryReactionOrderByWithRelationInput } from './story-reaction-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StoryReactionWhereUniqueInput } from './story-reaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StoryReactionScalarFieldEnum } from './story-reaction-scalar-field.enum';

@ArgsType()
export class FindFirstStoryReactionOrThrowArgs {

    @Field(() => StoryReactionWhereInput, {nullable:true})
    @Type(() => StoryReactionWhereInput)
    where?: StoryReactionWhereInput;

    @Field(() => [StoryReactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoryReactionOrderByWithRelationInput>;

    @Field(() => StoryReactionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StoryReactionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StoryReactionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${StoryReactionScalarFieldEnum}`>;
}
