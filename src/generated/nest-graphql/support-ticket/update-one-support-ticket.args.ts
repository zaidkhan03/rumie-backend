import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupportTicketUpdateInput } from './support-ticket-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SupportTicketWhereUniqueInput } from './support-ticket-where-unique.input';

@ArgsType()
export class UpdateOneSupportTicketArgs {

    @Field(() => SupportTicketUpdateInput, {nullable:false})
    @Type(() => SupportTicketUpdateInput)
    data!: SupportTicketUpdateInput;

    @Field(() => SupportTicketWhereUniqueInput, {nullable:false})
    @Type(() => SupportTicketWhereUniqueInput)
    where!: Prisma.AtLeast<SupportTicketWhereUniqueInput, 'id'>;
}
