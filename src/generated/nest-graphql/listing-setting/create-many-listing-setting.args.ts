import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListingSettingCreateManyInput } from './listing-setting-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyListingSettingArgs {

    @Field(() => [ListingSettingCreateManyInput], {nullable:false})
    @Type(() => ListingSettingCreateManyInput)
    data!: Array<ListingSettingCreateManyInput>;
}
