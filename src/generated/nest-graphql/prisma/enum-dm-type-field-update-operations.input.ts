import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMType } from './dm-type.enum';

@InputType()
export class EnumDMTypeFieldUpdateOperationsInput {

    @Field(() => DMType, {nullable:true})
    set?: `${DMType}`;
}
