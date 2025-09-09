import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdType } from './ad-type.enum';
import { NestedEnumAdTypeFilter } from './nested-enum-ad-type-filter.input';

@InputType()
export class EnumAdTypeFilter {

    @Field(() => AdType, {nullable:true})
    equals?: `${AdType}`;

    @Field(() => [AdType], {nullable:true})
    in?: Array<`${AdType}`>;

    @Field(() => [AdType], {nullable:true})
    notIn?: Array<`${AdType}`>;

    @Field(() => NestedEnumAdTypeFilter, {nullable:true})
    not?: NestedEnumAdTypeFilter;
}
