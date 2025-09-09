import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGenderFilter } from './user-gender-filter.enum';
import { NestedEnumUserGenderFilterFilter } from './nested-enum-user-gender-filter-filter.input';

@InputType()
export class EnumUserGenderFilterFilter {

    @Field(() => UserGenderFilter, {nullable:true})
    equals?: `${UserGenderFilter}`;

    @Field(() => [UserGenderFilter], {nullable:true})
    in?: Array<`${UserGenderFilter}`>;

    @Field(() => [UserGenderFilter], {nullable:true})
    notIn?: Array<`${UserGenderFilter}`>;

    @Field(() => NestedEnumUserGenderFilterFilter, {nullable:true})
    not?: NestedEnumUserGenderFilterFilter;
}
