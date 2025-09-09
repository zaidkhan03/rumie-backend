import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Platform } from './platform.enum';
import { NestedEnumPlatformFilter } from './nested-enum-platform-filter.input';

@InputType()
export class EnumPlatformFilter {

    @Field(() => Platform, {nullable:true})
    equals?: `${Platform}`;

    @Field(() => [Platform], {nullable:true})
    in?: Array<`${Platform}`>;

    @Field(() => [Platform], {nullable:true})
    notIn?: Array<`${Platform}`>;

    @Field(() => NestedEnumPlatformFilter, {nullable:true})
    not?: NestedEnumPlatformFilter;
}
