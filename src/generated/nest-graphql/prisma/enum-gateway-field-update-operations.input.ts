import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gateway } from './gateway.enum';

@InputType()
export class EnumGatewayFieldUpdateOperationsInput {

    @Field(() => Gateway, {nullable:true})
    set?: `${Gateway}`;
}
