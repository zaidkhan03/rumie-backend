import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StoryPayloadUpdateManyMutationInput } from './story-payload-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StoryPayloadWhereInput } from './story-payload-where.input';

@ArgsType()
export class UpdateManyStoryPayloadArgs {

    @Field(() => StoryPayloadUpdateManyMutationInput, {nullable:false})
    @Type(() => StoryPayloadUpdateManyMutationInput)
    data!: StoryPayloadUpdateManyMutationInput;

    @Field(() => StoryPayloadWhereInput, {nullable:true})
    @Type(() => StoryPayloadWhereInput)
    where?: StoryPayloadWhereInput;
}
