import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppLovinPosition } from './app-lovin-position.enum';

@InputType()
export class EnumAppLovinPositionFieldUpdateOperationsInput {

    @Field(() => AppLovinPosition, {nullable:true})
    set?: `${AppLovinPosition}`;
}
