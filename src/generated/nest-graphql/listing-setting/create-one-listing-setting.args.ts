import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListingSettingCreateInput } from './listing-setting-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneListingSettingArgs {

    @Field(() => ListingSettingCreateInput, {nullable:false})
    @Type(() => ListingSettingCreateInput)
    data!: ListingSettingCreateInput;
}
