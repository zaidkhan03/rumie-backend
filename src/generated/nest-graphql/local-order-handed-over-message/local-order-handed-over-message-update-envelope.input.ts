import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalOrderHandedOverMessageCreateInput } from './local-order-handed-over-message-create.input';
import { Type } from 'class-transformer';
import { LocalOrderHandedOverMessageUpdateInput } from './local-order-handed-over-message-update.input';

@InputType()
export class LocalOrderHandedOverMessageUpdateEnvelopeInput {

    @Field(() => LocalOrderHandedOverMessageCreateInput, {nullable:true})
    @Type(() => LocalOrderHandedOverMessageCreateInput)
    set?: LocalOrderHandedOverMessageCreateInput;

    @Field(() => LocalOrderHandedOverMessageUpdateInput, {nullable:true})
    @Type(() => LocalOrderHandedOverMessageUpdateInput)
    update?: LocalOrderHandedOverMessageUpdateInput;
}
