import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryType } from './story-type.enum';
import { NestedEnumStoryTypeFilter } from './nested-enum-story-type-filter.input';

@InputType()
export class EnumStoryTypeFilter {

    @Field(() => StoryType, {nullable:true})
    equals?: `${StoryType}`;

    @Field(() => [StoryType], {nullable:true})
    in?: Array<`${StoryType}`>;

    @Field(() => [StoryType], {nullable:true})
    notIn?: Array<`${StoryType}`>;

    @Field(() => NestedEnumStoryTypeFilter, {nullable:true})
    not?: NestedEnumStoryTypeFilter;
}
