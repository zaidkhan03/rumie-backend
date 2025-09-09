import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppLovinWhereInput } from './app-lovin-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAppLovinArgs {

    @Field(() => AppLovinWhereInput, {nullable:true})
    @Type(() => AppLovinWhereInput)
    where?: AppLovinWhereInput;
}
