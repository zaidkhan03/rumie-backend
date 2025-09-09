import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminSessionCreateInput } from '../admin-session/admin-session-create.input';
import { Type } from 'class-transformer';
import { AdminSessionUpdateManyInput } from '../admin-session/admin-session-update-many.input';
import { AdminSessionDeleteManyInput } from './admin-session-delete-many.input';

@InputType()
export class AdminSessionListUpdateEnvelopeInput {

    @Field(() => [AdminSessionCreateInput], {nullable:true})
    @Type(() => AdminSessionCreateInput)
    set?: Array<AdminSessionCreateInput>;

    @Field(() => [AdminSessionCreateInput], {nullable:true})
    push?: Array<AdminSessionCreateInput>;

    @Field(() => AdminSessionUpdateManyInput, {nullable:true})
    @Type(() => AdminSessionUpdateManyInput)
    updateMany?: AdminSessionUpdateManyInput;

    @Field(() => AdminSessionDeleteManyInput, {nullable:true})
    @Type(() => AdminSessionDeleteManyInput)
    deleteMany?: AdminSessionDeleteManyInput;
}
