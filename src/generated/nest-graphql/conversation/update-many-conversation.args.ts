import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConversationUpdateManyMutationInput } from './conversation-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ConversationWhereInput } from './conversation-where.input';

@ArgsType()
export class UpdateManyConversationArgs {

    @Field(() => ConversationUpdateManyMutationInput, {nullable:false})
    @Type(() => ConversationUpdateManyMutationInput)
    data!: ConversationUpdateManyMutationInput;

    @Field(() => ConversationWhereInput, {nullable:true})
    @Type(() => ConversationWhereInput)
    where?: ConversationWhereInput;
}
