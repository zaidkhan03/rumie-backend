import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DMMessageTypeWhereUniqueInput } from '../dm-message-type/dm-message-type-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDmMessageTypeArgs {

    @Field(() => DMMessageTypeWhereUniqueInput, {nullable:false})
    @Type(() => DMMessageTypeWhereUniqueInput)
    where!: DMMessageTypeWhereUniqueInput;
}
