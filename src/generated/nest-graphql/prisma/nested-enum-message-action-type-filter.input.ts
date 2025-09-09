import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageActionType } from './message-action-type.enum';

@InputType()
export class NestedEnumMessageActionTypeFilter {

    @Field(() => MessageActionType, {nullable:true})
    equals?: `${MessageActionType}`;

    @Field(() => [MessageActionType], {nullable:true})
    in?: Array<`${MessageActionType}`>;

    @Field(() => [MessageActionType], {nullable:true})
    notIn?: Array<`${MessageActionType}`>;

    @Field(() => NestedEnumMessageActionTypeFilter, {nullable:true})
    not?: NestedEnumMessageActionTypeFilter;
}
