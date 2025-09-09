import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatCreateManyInput } from './campus-chat-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCampusChatArgs {

    @Field(() => [CampusChatCreateManyInput], {nullable:false})
    @Type(() => CampusChatCreateManyInput)
    data!: Array<CampusChatCreateManyInput>;
}
