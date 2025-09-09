import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppLovinCreateManyInput } from './app-lovin-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAppLovinArgs {

    @Field(() => [AppLovinCreateManyInput], {nullable:false})
    @Type(() => AppLovinCreateManyInput)
    data!: Array<AppLovinCreateManyInput>;
}
