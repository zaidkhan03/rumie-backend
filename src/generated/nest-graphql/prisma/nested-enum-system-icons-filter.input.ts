import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemIcons } from './system-icons.enum';

@InputType()
export class NestedEnumSystemIconsFilter {

    @Field(() => SystemIcons, {nullable:true})
    equals?: `${SystemIcons}`;

    @Field(() => [SystemIcons], {nullable:true})
    in?: Array<`${SystemIcons}`>;

    @Field(() => [SystemIcons], {nullable:true})
    notIn?: Array<`${SystemIcons}`>;

    @Field(() => NestedEnumSystemIconsFilter, {nullable:true})
    not?: NestedEnumSystemIconsFilter;
}
