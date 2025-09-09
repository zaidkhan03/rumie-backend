import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AltSignupStatus } from './alt-signup-status.enum';

@InputType()
export class EnumAltSignupStatusFieldUpdateOperationsInput {

    @Field(() => AltSignupStatus, {nullable:true})
    set?: `${AltSignupStatus}`;
}
