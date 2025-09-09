import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupportTicketCreateManyInput } from './support-ticket-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySupportTicketArgs {

    @Field(() => [SupportTicketCreateManyInput], {nullable:false})
    @Type(() => SupportTicketCreateManyInput)
    data!: Array<SupportTicketCreateManyInput>;
}
