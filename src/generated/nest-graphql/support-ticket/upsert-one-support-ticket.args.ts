import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SupportTicketWhereUniqueInput } from './support-ticket-where-unique.input';
import { Type } from 'class-transformer';
import { SupportTicketCreateInput } from './support-ticket-create.input';
import { SupportTicketUpdateInput } from './support-ticket-update.input';

@ArgsType()
export class UpsertOneSupportTicketArgs {

    @Field(() => SupportTicketWhereUniqueInput, {nullable:false})
    @Type(() => SupportTicketWhereUniqueInput)
    where!: Prisma.AtLeast<SupportTicketWhereUniqueInput, 'id'>;

    @Field(() => SupportTicketCreateInput, {nullable:false})
    @Type(() => SupportTicketCreateInput)
    create!: SupportTicketCreateInput;

    @Field(() => SupportTicketUpdateInput, {nullable:false})
    @Type(() => SupportTicketUpdateInput)
    update!: SupportTicketUpdateInput;
}
