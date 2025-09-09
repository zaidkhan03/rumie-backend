import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SupportTicketWhereUniqueInput } from './support-ticket-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSupportTicketArgs {

    @Field(() => SupportTicketWhereUniqueInput, {nullable:false})
    @Type(() => SupportTicketWhereUniqueInput)
    where!: Prisma.AtLeast<SupportTicketWhereUniqueInput, 'id'>;
}
