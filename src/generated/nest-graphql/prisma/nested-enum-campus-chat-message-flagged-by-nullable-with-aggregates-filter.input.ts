import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatMessageFlaggedBy } from './campus-chat-message-flagged-by.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumCampusChatMessageFlaggedByNullableFilter } from './nested-enum-campus-chat-message-flagged-by-nullable-filter.input';

@InputType()
export class NestedEnumCampusChatMessageFlaggedByNullableWithAggregatesFilter {

    @Field(() => CampusChatMessageFlaggedBy, {nullable:true})
    equals?: `${CampusChatMessageFlaggedBy}`;

    @Field(() => [CampusChatMessageFlaggedBy], {nullable:true})
    in?: Array<`${CampusChatMessageFlaggedBy}`>;

    @Field(() => [CampusChatMessageFlaggedBy], {nullable:true})
    notIn?: Array<`${CampusChatMessageFlaggedBy}`>;

    @Field(() => NestedEnumCampusChatMessageFlaggedByNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCampusChatMessageFlaggedByNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumCampusChatMessageFlaggedByNullableFilter, {nullable:true})
    _min?: NestedEnumCampusChatMessageFlaggedByNullableFilter;

    @Field(() => NestedEnumCampusChatMessageFlaggedByNullableFilter, {nullable:true})
    _max?: NestedEnumCampusChatMessageFlaggedByNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
