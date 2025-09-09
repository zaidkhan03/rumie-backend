import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Platform } from './platform.enum';
import { NestedEnumPlatformNullableFilter } from './nested-enum-platform-nullable-filter.input';

@InputType()
export class EnumPlatformNullableFilter {

    @Field(() => Platform, {nullable:true})
    equals?: `${Platform}`;

    @Field(() => [Platform], {nullable:true})
    in?: Array<`${Platform}`>;

    @Field(() => [Platform], {nullable:true})
    notIn?: Array<`${Platform}`>;

    @Field(() => NestedEnumPlatformNullableFilter, {nullable:true})
    not?: NestedEnumPlatformNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
