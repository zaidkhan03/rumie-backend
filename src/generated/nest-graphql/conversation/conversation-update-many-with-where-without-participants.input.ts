import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationScalarWhereInput } from './conversation-scalar-where.input';
import { Type } from 'class-transformer';
import { ConversationUpdateManyMutationInput } from './conversation-update-many-mutation.input';

@InputType()
export class ConversationUpdateManyWithWhereWithoutParticipantsInput {

    @Field(() => ConversationScalarWhereInput, {nullable:false})
    @Type(() => ConversationScalarWhereInput)
    where!: ConversationScalarWhereInput;

    @Field(() => ConversationUpdateManyMutationInput, {nullable:false})
    @Type(() => ConversationUpdateManyMutationInput)
    data!: ConversationUpdateManyMutationInput;
}
