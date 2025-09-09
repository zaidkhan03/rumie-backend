import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatUpdateManyMutationInput } from './campus-chat-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CampusChatWhereInput } from './campus-chat-where.input';

@ArgsType()
export class UpdateManyCampusChatArgs {

    @Field(() => CampusChatUpdateManyMutationInput, {nullable:false})
    @Type(() => CampusChatUpdateManyMutationInput)
    data!: CampusChatUpdateManyMutationInput;

    @Field(() => CampusChatWhereInput, {nullable:true})
    @Type(() => CampusChatWhereInput)
    where?: CampusChatWhereInput;
}
