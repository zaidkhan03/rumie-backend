import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportMessageCreateInput } from '../support-message/support-message-create.input';
import { Type } from 'class-transformer';

@InputType()
export class SupportMessageListCreateEnvelopeInput {

    @Field(() => [SupportMessageCreateInput], {nullable:true})
    @Type(() => SupportMessageCreateInput)
    set?: Array<SupportMessageCreateInput>;
}
