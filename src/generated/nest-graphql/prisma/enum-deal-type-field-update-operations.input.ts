import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealType } from './deal-type.enum';

@InputType()
export class EnumDealTypeFieldUpdateOperationsInput {

    @Field(() => DealType, {nullable:true})
    set?: `${DealType}`;
}
