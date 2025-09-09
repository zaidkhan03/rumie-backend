import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminSessionCreateInput } from '../admin-session/admin-session-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AdminSessionListCreateEnvelopeInput {

    @Field(() => [AdminSessionCreateInput], {nullable:true})
    @Type(() => AdminSessionCreateInput)
    set?: Array<AdminSessionCreateInput>;
}
