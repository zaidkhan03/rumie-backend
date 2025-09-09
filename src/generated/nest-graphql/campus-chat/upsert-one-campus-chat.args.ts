import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CampusChatWhereUniqueInput } from './campus-chat-where-unique.input';
import { Type } from 'class-transformer';
import { CampusChatCreateInput } from './campus-chat-create.input';
import { CampusChatUpdateInput } from './campus-chat-update.input';

@ArgsType()
export class UpsertOneCampusChatArgs {

    @Field(() => CampusChatWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatWhereUniqueInput, 'id'>;

    @Field(() => CampusChatCreateInput, {nullable:false})
    @Type(() => CampusChatCreateInput)
    create!: CampusChatCreateInput;

    @Field(() => CampusChatUpdateInput, {nullable:false})
    @Type(() => CampusChatUpdateInput)
    update!: CampusChatUpdateInput;
}
