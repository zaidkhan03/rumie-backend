import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdvertiserWhereInput } from './advertiser-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAdvertiserArgs {

    @Field(() => AdvertiserWhereInput, {nullable:true})
    @Type(() => AdvertiserWhereInput)
    where?: AdvertiserWhereInput;
}
