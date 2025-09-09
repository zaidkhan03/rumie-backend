import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRole } from '../prisma/admin-role.enum';

@InputType()
export class AdminCreaterolesInput {

    @Field(() => [AdminRole], {nullable:false})
    set!: Array<`${AdminRole}`>;
}
