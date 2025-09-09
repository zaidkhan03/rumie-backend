import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StoryType } from '../prisma/story-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StoryMedia {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => StoryType, {nullable:false})
    type!: `${StoryType}`;

    @Field(() => Int, {nullable:true})
    duration!: number | null;

    @Field(() => String, {nullable:true})
    thumbnail!: string | null;
}
