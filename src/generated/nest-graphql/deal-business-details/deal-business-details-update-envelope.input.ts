import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealBusinessDetailsCreateInput } from './deal-business-details-create.input';
import { Type } from 'class-transformer';
import { DealBusinessDetailsUpdateInput } from './deal-business-details-update.input';

@InputType()
export class DealBusinessDetailsUpdateEnvelopeInput {

    @Field(() => DealBusinessDetailsCreateInput, {nullable:true})
    @Type(() => DealBusinessDetailsCreateInput)
    set?: DealBusinessDetailsCreateInput;

    @Field(() => DealBusinessDetailsUpdateInput, {nullable:true})
    @Type(() => DealBusinessDetailsUpdateInput)
    update?: DealBusinessDetailsUpdateInput;
}
