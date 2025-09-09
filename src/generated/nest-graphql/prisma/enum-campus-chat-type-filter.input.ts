import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatType } from './campus-chat-type.enum';
import { NestedEnumCampusChatTypeFilter } from './nested-enum-campus-chat-type-filter.input';

@InputType()
export class EnumCampusChatTypeFilter {

    @Field(() => CampusChatType, {nullable:true})
    equals?: `${CampusChatType}`;

    @Field(() => [CampusChatType], {nullable:true})
    in?: Array<`${CampusChatType}`>;

    @Field(() => [CampusChatType], {nullable:true})
    notIn?: Array<`${CampusChatType}`>;

    @Field(() => NestedEnumCampusChatTypeFilter, {nullable:true})
    not?: NestedEnumCampusChatTypeFilter;
}
