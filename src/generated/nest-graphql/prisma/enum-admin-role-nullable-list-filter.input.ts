import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRole } from './admin-role.enum';

@InputType()
export class EnumAdminRoleNullableListFilter {

    @Field(() => [AdminRole], {nullable:true})
    equals?: Array<`${AdminRole}`>;

    @Field(() => AdminRole, {nullable:true})
    has?: `${AdminRole}`;

    @Field(() => [AdminRole], {nullable:true})
    hasEvery?: Array<`${AdminRole}`>;

    @Field(() => [AdminRole], {nullable:true})
    hasSome?: Array<`${AdminRole}`>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
