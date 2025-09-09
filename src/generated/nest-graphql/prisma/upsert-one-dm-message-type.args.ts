import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DMMessageTypeWhereUniqueInput } from '../dm-message-type/dm-message-type-where-unique.input';
import { Type } from 'class-transformer';
import { DMMessageTypeCreateInput } from '../dm-message-type/dm-message-type-create.input';
import { DMMessageTypeUpdateInput } from '../dm-message-type/dm-message-type-update.input';

@ArgsType()
export class UpsertOneDmMessageTypeArgs {

    @Field(() => DMMessageTypeWhereUniqueInput, {nullable:false})
    @Type(() => DMMessageTypeWhereUniqueInput)
    where!: DMMessageTypeWhereUniqueInput;

    @Field(() => DMMessageTypeCreateInput, {nullable:false})
    @Type(() => DMMessageTypeCreateInput)
    create!: DMMessageTypeCreateInput;

    @Field(() => DMMessageTypeUpdateInput, {nullable:false})
    @Type(() => DMMessageTypeUpdateInput)
    update!: DMMessageTypeUpdateInput;
}
