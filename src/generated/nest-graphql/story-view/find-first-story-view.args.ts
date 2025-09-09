import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryViewWhereInput } from './story-view-where.input';
import { Type } from 'class-transformer';
import { StoryViewOrderByWithRelationInput } from './story-view-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StoryViewWhereUniqueInput } from './story-view-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StoryViewScalarFieldEnum } from './story-view-scalar-field.enum';

@ArgsType()
export class FindFirstStoryViewArgs {

    @Field(() => StoryViewWhereInput, {nullable:true})
    @Type(() => StoryViewWhereInput)
    where?: StoryViewWhereInput;

    @Field(() => [StoryViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoryViewOrderByWithRelationInput>;

    @Field(() => StoryViewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StoryViewWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StoryViewScalarFieldEnum], {nullable:true})
    distinct?: Array<`${StoryViewScalarFieldEnum}`>;
}
