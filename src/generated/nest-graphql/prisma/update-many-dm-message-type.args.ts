import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DMMessageTypeUpdateManyMutationInput } from '../dm-message-type/dm-message-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DMMessageTypeWhereInput } from '../dm-message-type/dm-message-type-where.input';

@ArgsType()
export class UpdateManyDmMessageTypeArgs {

    @Field(() => DMMessageTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => DMMessageTypeUpdateManyMutationInput)
    data!: DMMessageTypeUpdateManyMutationInput;

    @Field(() => DMMessageTypeWhereInput, {nullable:true})
    @Type(() => DMMessageTypeWhereInput)
    where?: DMMessageTypeWhereInput;
}
