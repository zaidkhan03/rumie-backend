import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupportTicketUpdateManyMutationInput } from './support-ticket-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SupportTicketWhereInput } from './support-ticket-where.input';

@ArgsType()
export class UpdateManySupportTicketArgs {

    @Field(() => SupportTicketUpdateManyMutationInput, {nullable:false})
    @Type(() => SupportTicketUpdateManyMutationInput)
    data!: SupportTicketUpdateManyMutationInput;

    @Field(() => SupportTicketWhereInput, {nullable:true})
    @Type(() => SupportTicketWhereInput)
    where?: SupportTicketWhereInput;
}
