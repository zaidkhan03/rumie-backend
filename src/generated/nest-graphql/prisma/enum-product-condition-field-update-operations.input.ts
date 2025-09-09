import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCondition } from './product-condition.enum';

@InputType()
export class EnumProductConditionFieldUpdateOperationsInput {

    @Field(() => ProductCondition, {nullable:true})
    set?: `${ProductCondition}`;
}
