import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserListedFilter } from './user-listed-filter.enum';

@InputType()
export class NullableEnumUserListedFilterFieldUpdateOperationsInput {

    @Field(() => UserListedFilter, {nullable:true})
    set?: `${UserListedFilter}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
