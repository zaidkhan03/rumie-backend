import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumUserGenderFilterFilter } from '../prisma/enum-user-gender-filter-filter.input';
import { EnumUserListedFilterNullableFilter } from '../prisma/enum-user-listed-filter-nullable-filter.input';
import { EnumBooleanChoiceNullableFilter } from '../prisma/enum-boolean-choice-nullable-filter.input';

@InputType()
export class PushNotificationCampaignFiltersWhereInput {

    @Field(() => [PushNotificationCampaignFiltersWhereInput], {nullable:true})
    AND?: Array<PushNotificationCampaignFiltersWhereInput>;

    @Field(() => [PushNotificationCampaignFiltersWhereInput], {nullable:true})
    OR?: Array<PushNotificationCampaignFiltersWhereInput>;

    @Field(() => [PushNotificationCampaignFiltersWhereInput], {nullable:true})
    NOT?: Array<PushNotificationCampaignFiltersWhereInput>;

    @Field(() => EnumUserGenderFilterFilter, {nullable:true})
    userGender?: EnumUserGenderFilterFilter;

    @Field(() => EnumUserListedFilterNullableFilter, {nullable:true})
    userListed?: EnumUserListedFilterNullableFilter;

    @Field(() => EnumBooleanChoiceNullableFilter, {nullable:true})
    userRentedEver?: EnumBooleanChoiceNullableFilter;

    @Field(() => EnumBooleanChoiceNullableFilter, {nullable:true})
    userBoughtEver?: EnumBooleanChoiceNullableFilter;
}
