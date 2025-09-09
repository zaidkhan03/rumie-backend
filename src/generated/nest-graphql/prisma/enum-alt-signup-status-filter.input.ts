import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AltSignupStatus } from './alt-signup-status.enum';
import { NestedEnumAltSignupStatusFilter } from './nested-enum-alt-signup-status-filter.input';

@InputType()
export class EnumAltSignupStatusFilter {

    @Field(() => AltSignupStatus, {nullable:true})
    equals?: `${AltSignupStatus}`;

    @Field(() => [AltSignupStatus], {nullable:true})
    in?: Array<`${AltSignupStatus}`>;

    @Field(() => [AltSignupStatus], {nullable:true})
    notIn?: Array<`${AltSignupStatus}`>;

    @Field(() => NestedEnumAltSignupStatusFilter, {nullable:true})
    not?: NestedEnumAltSignupStatusFilter;
}
