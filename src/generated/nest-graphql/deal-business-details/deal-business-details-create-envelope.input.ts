import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealBusinessDetailsCreateInput } from './deal-business-details-create.input';
import { Type } from 'class-transformer';

@InputType()
export class DealBusinessDetailsCreateEnvelopeInput {

    @Field(() => DealBusinessDetailsCreateInput, {nullable:true})
    @Type(() => DealBusinessDetailsCreateInput)
    set?: DealBusinessDetailsCreateInput;
}
