import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdType } from './ad-type.enum';

@InputType()
export class EnumAdTypeFieldUpdateOperationsInput {

    @Field(() => AdType, {nullable:true})
    set?: `${AdType}`;
}
