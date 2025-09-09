import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryWhereInput } from './story-where.input';
import { Type } from 'class-transformer';
import { StoryOrderByWithRelationInput } from './story-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { StoryWhereUniqueInput } from './story-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StoryScalarFieldEnum } from './story-scalar-field.enum';

@ArgsType()
export class FindFirstStoryOrThrowArgs {

    @Field(() => StoryWhereInput, {nullable:true})
    @Type(() => StoryWhereInput)
    where?: StoryWhereInput;

    @Field(() => [StoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoryOrderByWithRelationInput>;

    @Field(() => StoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<StoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StoryScalarFieldEnum], {nullable:true})
    distinct?: Array<`${StoryScalarFieldEnum}`>;
}
