import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdvertiserCreateManyInput } from './advertiser-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdvertiserArgs {

    @Field(() => [AdvertiserCreateManyInput], {nullable:false})
    @Type(() => AdvertiserCreateManyInput)
    data!: Array<AdvertiserCreateManyInput>;
}
