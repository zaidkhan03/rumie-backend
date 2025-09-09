import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CampusChatMessagePayloadWhereUniqueInput } from './campus-chat-message-payload-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCampusChatMessagePayloadOrThrowArgs {

    @Field(() => CampusChatMessagePayloadWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatMessagePayloadWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatMessagePayloadWhereUniqueInput, 'id'>;
}
