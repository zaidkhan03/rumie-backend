import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemIcons } from './system-icons.enum';
import { NestedEnumSystemIconsFilter } from './nested-enum-system-icons-filter.input';

@InputType()
export class EnumSystemIconsFilter {

    @Field(() => SystemIcons, {nullable:true})
    equals?: `${SystemIcons}`;

    @Field(() => [SystemIcons], {nullable:true})
    in?: Array<`${SystemIcons}`>;

    @Field(() => [SystemIcons], {nullable:true})
    notIn?: Array<`${SystemIcons}`>;

    @Field(() => NestedEnumSystemIconsFilter, {nullable:true})
    not?: NestedEnumSystemIconsFilter;
}
