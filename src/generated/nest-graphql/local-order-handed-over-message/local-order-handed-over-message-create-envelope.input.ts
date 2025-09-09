import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalOrderHandedOverMessageCreateInput } from './local-order-handed-over-message-create.input';
import { Type } from 'class-transformer';

@InputType()
export class LocalOrderHandedOverMessageCreateEnvelopeInput {

    @Field(() => LocalOrderHandedOverMessageCreateInput, {nullable:true})
    @Type(() => LocalOrderHandedOverMessageCreateInput)
    set?: LocalOrderHandedOverMessageCreateInput;
}
