import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DMMessageTypeUpdateInput } from '../dm-message-type/dm-message-type-update.input';
import { Type } from 'class-transformer';
import { DMMessageTypeWhereUniqueInput } from '../dm-message-type/dm-message-type-where-unique.input';

@ArgsType()
export class UpdateOneDmMessageTypeArgs {

    @Field(() => DMMessageTypeUpdateInput, {nullable:false})
    @Type(() => DMMessageTypeUpdateInput)
    data!: DMMessageTypeUpdateInput;

    @Field(() => DMMessageTypeWhereUniqueInput, {nullable:false})
    @Type(() => DMMessageTypeWhereUniqueInput)
    where!: DMMessageTypeWhereUniqueInput;
}
