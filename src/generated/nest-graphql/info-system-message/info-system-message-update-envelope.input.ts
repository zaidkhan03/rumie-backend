import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InfoSystemMessageCreateInput } from './info-system-message-create.input';
import { Type } from 'class-transformer';
import { InfoSystemMessageUpdateInput } from './info-system-message-update.input';

@InputType()
export class InfoSystemMessageUpdateEnvelopeInput {

    @Field(() => InfoSystemMessageCreateInput, {nullable:true})
    @Type(() => InfoSystemMessageCreateInput)
    set?: InfoSystemMessageCreateInput;

    @Field(() => InfoSystemMessageUpdateInput, {nullable:true})
    @Type(() => InfoSystemMessageUpdateInput)
    update?: InfoSystemMessageUpdateInput;
}
