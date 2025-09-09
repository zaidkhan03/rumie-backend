import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupportTicketCreateInput } from './support-ticket-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSupportTicketArgs {

    @Field(() => SupportTicketCreateInput, {nullable:false})
    @Type(() => SupportTicketCreateInput)
    data!: SupportTicketCreateInput;
}
