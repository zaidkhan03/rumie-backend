import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatMessageFlaggedBy } from './campus-chat-message-flagged-by.enum';

@InputType()
export class NestedEnumCampusChatMessageFlaggedByNullableFilter {

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
