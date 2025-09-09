import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatMessageType } from './campus-chat-message-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCampusChatMessageTypeFilter } from './nested-enum-campus-chat-message-type-filter.input';

@InputType()
export class NestedEnumCampusChatMessageTypeWithAggregatesFilter {

    @Field(() => CampusChatMessageType, {nullable:true})
    equals?: `${CampusChatMessageType}`;

    @Field(() => [CampusChatMessageType], {nullable:true})
    in?: Array<`${CampusChatMessageType}`>;

    @Field(() => [CampusChatMessageType], {nullable:true})
    notIn?: Array<`${CampusChatMessageType}`>;

    @Field(() => NestedEnumCampusChatMessageTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCampusChatMessageTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCampusChatMessageTypeFilter, {nullable:true})
    _min?: NestedEnumCampusChatMessageTypeFilter;

    @Field(() => NestedEnumCampusChatMessageTypeFilter, {nullable:true})
    _max?: NestedEnumCampusChatMessageTypeFilter;
}
