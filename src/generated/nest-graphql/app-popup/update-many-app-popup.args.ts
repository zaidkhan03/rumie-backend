import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppPopupUpdateManyMutationInput } from './app-popup-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AppPopupWhereInput } from './app-popup-where.input';

@ArgsType()
export class UpdateManyAppPopupArgs {

    @Field(() => AppPopupUpdateManyMutationInput, {nullable:false})
    @Type(() => AppPopupUpdateManyMutationInput)
    data!: AppPopupUpdateManyMutationInput;

    @Field(() => AppPopupWhereInput, {nullable:true})
    @Type(() => AppPopupWhereInput)
    where?: AppPopupWhereInput;
}
