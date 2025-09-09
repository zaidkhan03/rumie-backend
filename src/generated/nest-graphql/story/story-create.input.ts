import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryMediaCreateEnvelopeInput } from '../story-media/story-media-create-envelope.input';
import { StoryType } from '../prisma/story-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';

@InputType()
export class StoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => StoryMediaCreateEnvelopeInput, {nullable:false})
    media!: StoryMediaCreateEnvelopeInput;

    @Field(() => StoryType, {nullable:false})
    type!: `${StoryType}`;

    @Field(() => GraphQLJSON, {nullable:true})
    content?: any;

    @Field(() => String, {nullable:true})
    caption?: string;

    @Field(() => String, {nullable:true})
    backgroundColor?: string;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => String, {nullable:false})
    eduInstituteId!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;

    @Field(() => Boolean, {nullable:true})
    archived?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
