import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Platform } from './platform.enum';

@InputType()
export class EnumPlatformFieldUpdateOperationsInput {

    @Field(() => Platform, {nullable:true})
    set?: `${Platform}`;
}
