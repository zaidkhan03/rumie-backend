import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMType } from './dm-type.enum';
import { NestedEnumDMTypeFilter } from './nested-enum-dm-type-filter.input';

@InputType()
export class EnumDMTypeFilter {

    @Field(() => DMType, {nullable:true})
    equals?: `${DMType}`;

    @Field(() => [DMType], {nullable:true})
    in?: Array<`${DMType}`>;

    @Field(() => [DMType], {nullable:true})
    notIn?: Array<`${DMType}`>;

    @Field(() => NestedEnumDMTypeFilter, {nullable:true})
    not?: NestedEnumDMTypeFilter;
}
