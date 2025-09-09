import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupportTicketWhereInput } from './support-ticket-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySupportTicketArgs {

    @Field(() => SupportTicketWhereInput, {nullable:true})
    @Type(() => SupportTicketWhereInput)
    where?: SupportTicketWhereInput;
}
