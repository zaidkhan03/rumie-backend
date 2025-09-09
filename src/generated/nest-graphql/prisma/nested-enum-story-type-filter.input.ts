import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryType } from './story-type.enum';

@InputType()
export class NestedEnumStoryTypeFilter {

    @Field(() => StoryType, {nullable:true})
    equals?: `${StoryType}`;

    @Field(() => [StoryType], {nullable:true})
    in?: Array<`${StoryType}`>;

    @Field(() => [StoryType], {nullable:true})
    notIn?: Array<`${StoryType}`>;

    @Field(() => NestedEnumStoryTypeFilter, {nullable:true})
    not?: NestedEnumStoryTypeFilter;
}
