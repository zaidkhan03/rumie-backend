import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppLovingAdType } from './app-loving-ad-type.enum';

@InputType()
export class EnumAppLovingAdTypeFieldUpdateOperationsInput {

    @Field(() => AppLovingAdType, {nullable:true})
    set?: `${AppLovingAdType}`;
}
