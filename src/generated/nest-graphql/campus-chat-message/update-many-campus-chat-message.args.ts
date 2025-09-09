import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessageUpdateManyMutationInput } from './campus-chat-message-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CampusChatMessageWhereInput } from './campus-chat-message-where.input';

@ArgsType()
export class UpdateManyCampusChatMessageArgs {

    @Field(() => CampusChatMessageUpdateManyMutationInput, {nullable:false})
    @Type(() => CampusChatMessageUpdateManyMutationInput)
    data!: CampusChatMessageUpdateManyMutationInput;

    @Field(() => CampusChatMessageWhereInput, {nullable:true})
    @Type(() => CampusChatMessageWhereInput)
    where?: CampusChatMessageWhereInput;
}
