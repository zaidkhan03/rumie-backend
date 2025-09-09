import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InfoSystemMessageCreateInput } from './info-system-message-create.input';
import { Type } from 'class-transformer';

@InputType()
export class InfoSystemMessageCreateEnvelopeInput {

    @Field(() => InfoSystemMessageCreateInput, {nullable:true})
    @Type(() => InfoSystemMessageCreateInput)
    set?: InfoSystemMessageCreateInput;
}
