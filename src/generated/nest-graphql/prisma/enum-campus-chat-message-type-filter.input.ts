import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatMessageType } from './campus-chat-message-type.enum';
import { NestedEnumCampusChatMessageTypeFilter } from './nested-enum-campus-chat-message-type-filter.input';

@InputType()
export class EnumCampusChatMessageTypeFilter {

    @Field(() => CampusChatMessageType, {nullable:true})
    equals?: `${CampusChatMessageType}`;

    @Field(() => [CampusChatMessageType], {nullable:true})
    in?: Array<`${CampusChatMessageType}`>;

    @Field(() => [CampusChatMessageType], {nullable:true})
    notIn?: Array<`${CampusChatMessageType}`>;

    @Field(() => NestedEnumCampusChatMessageTypeFilter, {nullable:true})
    not?: NestedEnumCampusChatMessageTypeFilter;
}
