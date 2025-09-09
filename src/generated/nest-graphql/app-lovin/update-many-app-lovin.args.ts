import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppLovinUpdateManyMutationInput } from './app-lovin-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AppLovinWhereInput } from './app-lovin-where.input';

@ArgsType()
export class UpdateManyAppLovinArgs {

    @Field(() => AppLovinUpdateManyMutationInput, {nullable:false})
    @Type(() => AppLovinUpdateManyMutationInput)
    data!: AppLovinUpdateManyMutationInput;

    @Field(() => AppLovinWhereInput, {nullable:true})
    @Type(() => AppLovinWhereInput)
    where?: AppLovinWhereInput;
}
