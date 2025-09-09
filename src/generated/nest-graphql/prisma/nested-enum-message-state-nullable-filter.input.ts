import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageState } from './message-state.enum';

@InputType()
export class NestedEnumMessageStateNullableFilter {

    @Field(() => MessageState, {nullable:true})
    equals?: `${MessageState}`;

    @Field(() => [MessageState], {nullable:true})
    in?: Array<`${MessageState}`>;

    @Field(() => [MessageState], {nullable:true})
    notIn?: Array<`${MessageState}`>;

    @Field(() => NestedEnumMessageStateNullableFilter, {nullable:true})
    not?: NestedEnumMessageStateNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
