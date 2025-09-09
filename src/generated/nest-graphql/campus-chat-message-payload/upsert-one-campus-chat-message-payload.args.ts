import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CampusChatMessagePayloadWhereUniqueInput } from './campus-chat-message-payload-where-unique.input';
import { Type } from 'class-transformer';
import { CampusChatMessagePayloadCreateInput } from './campus-chat-message-payload-create.input';
import { CampusChatMessagePayloadUpdateInput } from './campus-chat-message-payload-update.input';

@ArgsType()
export class UpsertOneCampusChatMessagePayloadArgs {

    @Field(() => CampusChatMessagePayloadWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatMessagePayloadWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatMessagePayloadWhereUniqueInput, 'id'>;

    @Field(() => CampusChatMessagePayloadCreateInput, {nullable:false})
    @Type(() => CampusChatMessagePayloadCreateInput)
    create!: CampusChatMessagePayloadCreateInput;

    @Field(() => CampusChatMessagePayloadUpdateInput, {nullable:false})
    @Type(() => CampusChatMessagePayloadUpdateInput)
    update!: CampusChatMessagePayloadUpdateInput;
}
