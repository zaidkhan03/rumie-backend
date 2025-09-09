import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatWhereInput } from './campus-chat-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCampusChatArgs {

    @Field(() => CampusChatWhereInput, {nullable:true})
    @Type(() => CampusChatWhereInput)
    where?: CampusChatWhereInput;
}
