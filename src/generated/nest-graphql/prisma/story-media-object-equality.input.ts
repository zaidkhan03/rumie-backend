import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryType } from './story-type.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class StoryMediaObjectEqualityInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => StoryType, {nullable:false})
    type!: `${StoryType}`;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    thumbnail?: string;
}
