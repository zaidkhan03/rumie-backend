import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { StoryMedia } from '../story-media/story-media.model';
import { StoryType } from '../prisma/story-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Story {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => StoryMedia, {nullable:false})
    media?: StoryMedia;

    @Field(() => StoryType, {nullable:false})
    type!: `${StoryType}`;

    @Field(() => GraphQLJSON, {nullable:true})
    content!: any | null;

    @Field(() => String, {nullable:true})
    caption!: string | null;

    @Field(() => String, {nullable:true})
    backgroundColor!: string | null;

    @Field(() => Int, {defaultValue:0,nullable:false})
    viewCount!: number;

    @Field(() => String, {nullable:false})
    eduInstituteId!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    archived!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
