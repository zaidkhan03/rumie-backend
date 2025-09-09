import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppLovinCreateInput } from './app-lovin-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAppLovinArgs {

    @Field(() => AppLovinCreateInput, {nullable:false})
    @Type(() => AppLovinCreateInput)
    data!: AppLovinCreateInput;
}
