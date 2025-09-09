import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatMessagePayloadUpdateInput } from './campus-chat-message-payload-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CampusChatMessagePayloadWhereUniqueInput } from './campus-chat-message-payload-where-unique.input';

@ArgsType()
export class UpdateOneCampusChatMessagePayloadArgs {

    @Field(() => CampusChatMessagePayloadUpdateInput, {nullable:false})
    @Type(() => CampusChatMessagePayloadUpdateInput)
    data!: CampusChatMessagePayloadUpdateInput;

    @Field(() => CampusChatMessagePayloadWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatMessagePayloadWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatMessagePayloadWhereUniqueInput, 'id'>;
}
