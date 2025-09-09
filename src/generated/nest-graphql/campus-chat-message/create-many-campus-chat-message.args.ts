import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessageCreateManyInput } from './campus-chat-message-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCampusChatMessageArgs {

    @Field(() => [CampusChatMessageCreateManyInput], {nullable:false})
    @Type(() => CampusChatMessageCreateManyInput)
    data!: Array<CampusChatMessageCreateManyInput>;
}
