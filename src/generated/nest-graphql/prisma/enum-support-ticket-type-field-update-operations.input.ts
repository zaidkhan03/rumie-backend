import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportTicketType } from './support-ticket-type.enum';

@InputType()
export class EnumSupportTicketTypeFieldUpdateOperationsInput {

    @Field(() => SupportTicketType, {nullable:true})
    set?: `${SupportTicketType}`;
}
