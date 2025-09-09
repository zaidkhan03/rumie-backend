import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DMMessageTypeWhereInput } from '../dm-message-type/dm-message-type-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDmMessageTypeArgs {

    @Field(() => DMMessageTypeWhereInput, {nullable:true})
    @Type(() => DMMessageTypeWhereInput)
    where?: DMMessageTypeWhereInput;
}
