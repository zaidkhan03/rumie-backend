import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessageWhereInput } from './campus-chat-message-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCampusChatMessageArgs {

    @Field(() => CampusChatMessageWhereInput, {nullable:true})
    @Type(() => CampusChatMessageWhereInput)
    where?: CampusChatMessageWhereInput;
}
