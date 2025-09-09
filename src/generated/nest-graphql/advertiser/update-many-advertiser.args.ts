import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdvertiserUpdateManyMutationInput } from './advertiser-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdvertiserWhereInput } from './advertiser-where.input';

@ArgsType()
export class UpdateManyAdvertiserArgs {

    @Field(() => AdvertiserUpdateManyMutationInput, {nullable:false})
    @Type(() => AdvertiserUpdateManyMutationInput)
    data!: AdvertiserUpdateManyMutationInput;

    @Field(() => AdvertiserWhereInput, {nullable:true})
    @Type(() => AdvertiserWhereInput)
    where?: AdvertiserWhereInput;
}
