import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdvertiserCreateInput } from './advertiser-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdvertiserArgs {

    @Field(() => AdvertiserCreateInput, {nullable:false})
    @Type(() => AdvertiserCreateInput)
    data!: AdvertiserCreateInput;
}
