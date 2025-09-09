import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatMessageType } from './campus-chat-message-type.enum';

@InputType()
export class NestedEnumCampusChatMessageTypeFilter {

    @Field(() => CampusChatMessageType, {nullable:true})
    equals?: `${CampusChatMessageType}`;

    @Field(() => [CampusChatMessageType], {nullable:true})
    in?: Array<`${CampusChatMessageType}`>;

    @Field(() => [CampusChatMessageType], {nullable:true})
    notIn?: Array<`${CampusChatMessageType}`>;

    @Field(() => NestedEnumCampusChatMessageTypeFilter, {nullable:true})
    not?: NestedEnumCampusChatMessageTypeFilter;
}
