import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSessionCreateInput } from '../user-session/user-session-create.input';
import { Type } from 'class-transformer';
import { UserSessionUpdateManyInput } from '../user-session/user-session-update-many.input';
import { UserSessionDeleteManyInput } from './user-session-delete-many.input';

@InputType()
export class UserSessionListUpdateEnvelopeInput {

    @Field(() => [UserSessionCreateInput], {nullable:true})
    @Type(() => UserSessionCreateInput)
    set?: Array<UserSessionCreateInput>;

    @Field(() => [UserSessionCreateInput], {nullable:true})
    push?: Array<UserSessionCreateInput>;

    @Field(() => UserSessionUpdateManyInput, {nullable:true})
    @Type(() => UserSessionUpdateManyInput)
    updateMany?: UserSessionUpdateManyInput;

    @Field(() => UserSessionDeleteManyInput, {nullable:true})
    @Type(() => UserSessionDeleteManyInput)
    deleteMany?: UserSessionDeleteManyInput;
}
