import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryType } from './story-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumStoryTypeFilter } from './nested-enum-story-type-filter.input';

@InputType()
export class NestedEnumStoryTypeWithAggregatesFilter {

    @Field(() => StoryType, {nullable:true})
    equals?: `${StoryType}`;

    @Field(() => [StoryType], {nullable:true})
    in?: Array<`${StoryType}`>;

    @Field(() => [StoryType], {nullable:true})
    notIn?: Array<`${StoryType}`>;

    @Field(() => NestedEnumStoryTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumStoryTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumStoryTypeFilter, {nullable:true})
    _min?: NestedEnumStoryTypeFilter;

    @Field(() => NestedEnumStoryTypeFilter, {nullable:true})
    _max?: NestedEnumStoryTypeFilter;
}
