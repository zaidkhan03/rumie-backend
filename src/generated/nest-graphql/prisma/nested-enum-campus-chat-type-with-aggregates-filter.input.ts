import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatType } from './campus-chat-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCampusChatTypeFilter } from './nested-enum-campus-chat-type-filter.input';

@InputType()
export class NestedEnumCampusChatTypeWithAggregatesFilter {

    @Field(() => CampusChatType, {nullable:true})
    equals?: `${CampusChatType}`;

    @Field(() => [CampusChatType], {nullable:true})
    in?: Array<`${CampusChatType}`>;

    @Field(() => [CampusChatType], {nullable:true})
    notIn?: Array<`${CampusChatType}`>;

    @Field(() => NestedEnumCampusChatTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCampusChatTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCampusChatTypeFilter, {nullable:true})
    _min?: NestedEnumCampusChatTypeFilter;

    @Field(() => NestedEnumCampusChatTypeFilter, {nullable:true})
    _max?: NestedEnumCampusChatTypeFilter;
}
