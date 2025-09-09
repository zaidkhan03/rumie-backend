import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageType } from './message-type.enum';
import { NestedEnumMessageTypeFilter } from './nested-enum-message-type-filter.input';

@InputType()
export class EnumMessageTypeFilter {

    @Field(() => MessageType, {nullable:true})
    equals?: `${MessageType}`;

    @Field(() => [MessageType], {nullable:true})
    in?: Array<`${MessageType}`>;

    @Field(() => [MessageType], {nullable:true})
    notIn?: Array<`${MessageType}`>;

    @Field(() => NestedEnumMessageTypeFilter, {nullable:true})
    not?: NestedEnumMessageTypeFilter;
}
