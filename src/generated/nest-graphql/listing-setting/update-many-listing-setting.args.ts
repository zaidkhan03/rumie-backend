import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListingSettingUpdateManyMutationInput } from './listing-setting-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ListingSettingWhereInput } from './listing-setting-where.input';

@ArgsType()
export class UpdateManyListingSettingArgs {

    @Field(() => ListingSettingUpdateManyMutationInput, {nullable:false})
    @Type(() => ListingSettingUpdateManyMutationInput)
    data!: ListingSettingUpdateManyMutationInput;

    @Field(() => ListingSettingWhereInput, {nullable:true})
    @Type(() => ListingSettingWhereInput)
    where?: ListingSettingWhereInput;
}
