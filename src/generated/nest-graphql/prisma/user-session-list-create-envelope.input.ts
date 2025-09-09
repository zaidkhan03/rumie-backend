import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSessionCreateInput } from '../user-session/user-session-create.input';
import { Type } from 'class-transformer';

@InputType()
export class UserSessionListCreateEnvelopeInput {

    @Field(() => [UserSessionCreateInput], {nullable:true})
    @Type(() => UserSessionCreateInput)
    set?: Array<UserSessionCreateInput>;
}
