import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DMMessageTypeCreateInput } from '../dm-message-type/dm-message-type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDmMessageTypeArgs {

    @Field(() => DMMessageTypeCreateInput, {nullable:false})
    @Type(() => DMMessageTypeCreateInput)
    data!: DMMessageTypeCreateInput;
}
