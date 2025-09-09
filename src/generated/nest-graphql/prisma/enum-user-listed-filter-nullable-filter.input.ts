import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserListedFilter } from './user-listed-filter.enum';
import { NestedEnumUserListedFilterNullableFilter } from './nested-enum-user-listed-filter-nullable-filter.input';

@InputType()
export class EnumUserListedFilterNullableFilter {

    @Field(() => UserListedFilter, {nullable:true})
    equals?: `${UserListedFilter}`;

    @Field(() => [UserListedFilter], {nullable:true})
    in?: Array<`${UserListedFilter}`>;

    @Field(() => [UserListedFilter], {nullable:true})
    notIn?: Array<`${UserListedFilter}`>;

    @Field(() => NestedEnumUserListedFilterNullableFilter, {nullable:true})
    not?: NestedEnumUserListedFilterNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
