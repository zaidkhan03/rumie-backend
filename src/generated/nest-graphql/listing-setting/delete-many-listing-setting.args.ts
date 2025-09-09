import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListingSettingWhereInput } from './listing-setting-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyListingSettingArgs {

    @Field(() => ListingSettingWhereInput, {nullable:true})
    @Type(() => ListingSettingWhereInput)
    where?: ListingSettingWhereInput;
}
