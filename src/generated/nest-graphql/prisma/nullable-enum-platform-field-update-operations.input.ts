import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Platform } from './platform.enum';

@InputType()
export class NullableEnumPlatformFieldUpdateOperationsInput {

    @Field(() => Platform, {nullable:true})
    set?: `${Platform}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
