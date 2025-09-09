import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Platform } from './platform.enum';

@InputType()
export class NestedEnumPlatformFilter {

    @Field(() => Platform, {nullable:true})
    equals?: `${Platform}`;

    @Field(() => [Platform], {nullable:true})
    in?: Array<`${Platform}`>;

    @Field(() => [Platform], {nullable:true})
    notIn?: Array<`${Platform}`>;

    @Field(() => NestedEnumPlatformFilter, {nullable:true})
    not?: NestedEnumPlatformFilter;
}
