import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdUpdateManyMutationInput } from './ad-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdWhereInput } from './ad-where.input';

@ArgsType()
export class UpdateManyAdArgs {

    @Field(() => AdUpdateManyMutationInput, {nullable:false})
    @Type(() => AdUpdateManyMutationInput)
    data!: AdUpdateManyMutationInput;

    @Field(() => AdWhereInput, {nullable:true})
    @Type(() => AdWhereInput)
    where?: AdWhereInput;
}
