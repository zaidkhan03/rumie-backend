import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AltSignupStatus } from './alt-signup-status.enum';

@InputType()
export class NestedEnumAltSignupStatusFilter {

    @Field(() => AltSignupStatus, {nullable:true})
    equals?: `${AltSignupStatus}`;

    @Field(() => [AltSignupStatus], {nullable:true})
    in?: Array<`${AltSignupStatus}`>;

    @Field(() => [AltSignupStatus], {nullable:true})
    notIn?: Array<`${AltSignupStatus}`>;

    @Field(() => NestedEnumAltSignupStatusFilter, {nullable:true})
    not?: NestedEnumAltSignupStatusFilter;
}
