import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CampusChatMessageWhereUniqueInput } from './campus-chat-message-where-unique.input';
import { Type } from 'class-transformer';
import { CampusChatMessageCreateInput } from './campus-chat-message-create.input';
import { CampusChatMessageUpdateInput } from './campus-chat-message-update.input';

@ArgsType()
export class UpsertOneCampusChatMessageArgs {

    @Field(() => CampusChatMessageWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatMessageWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatMessageWhereUniqueInput, 'id'>;

    @Field(() => CampusChatMessageCreateInput, {nullable:false})
    @Type(() => CampusChatMessageCreateInput)
    create!: CampusChatMessageCreateInput;

    @Field(() => CampusChatMessageUpdateInput, {nullable:false})
    @Type(() => CampusChatMessageUpdateInput)
    update!: CampusChatMessageUpdateInput;
}
