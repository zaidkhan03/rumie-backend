import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRole } from '../prisma/admin-role.enum';

@InputType()
export class AdminUpdaterolesInput {

    @Field(() => [AdminRole], {nullable:true})
    set?: Array<`${AdminRole}`>;

    @Field(() => [AdminRole], {nullable:true})
    push?: Array<`${AdminRole}`>;
}
