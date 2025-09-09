import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatMessageFlaggedBy } from './campus-chat-message-flagged-by.enum';
import { NestedEnumCampusChatMessageFlaggedByNullableFilter } from './nested-enum-campus-chat-message-flagged-by-nullable-filter.input';

@InputType()
export class EnumCampusChatMessageFlaggedByNullableFilter {

    @Field(() => CampusChatMessageFlaggedBy, {nullable:true})
    equals?: `${CampusChatMessageFlaggedBy}`;

    @Field(() => [CampusChatMessageFlaggedBy], {nullable:true})
    in?: Array<`${CampusChatMessageFlaggedBy}`>;

    @Field(() => [CampusChatMessageFlaggedBy], {nullable:true})
    notIn?: Array<`${CampusChatMessageFlaggedBy}`>;

    @Field(() => NestedEnumCampusChatMessageFlaggedByNullableFilter, {nullable:true})
    not?: NestedEnumCampusChatMessageFlaggedByNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
