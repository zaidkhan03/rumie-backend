import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CampusChatUpdateInput } from './campus-chat-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CampusChatWhereUniqueInput } from './campus-chat-where-unique.input';

@ArgsType()
export class UpdateOneCampusChatArgs {

    @Field(() => CampusChatUpdateInput, {nullable:false})
    @Type(() => CampusChatUpdateInput)
    data!: CampusChatUpdateInput;

    @Field(() => CampusChatWhereUniqueInput, {nullable:false})
    @Type(() => CampusChatWhereUniqueInput)
    where!: Prisma.AtLeast<CampusChatWhereUniqueInput, 'id'>;
}
