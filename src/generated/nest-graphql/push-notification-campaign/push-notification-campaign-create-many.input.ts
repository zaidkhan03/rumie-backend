import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PushNotificationDataCreateEnvelopeInput } from '../push-notification-data/push-notification-data-create-envelope.input';
import { PushNotificationSenderListType } from '../prisma/push-notification-sender-list-type.enum';
import { EduInstituteSelectOptionCreateInput } from '../edu-institute-select-option/edu-institute-select-option-create.input';
import { PushNotificationCampaignFiltersCreateEnvelopeInput } from './push-notification-campaign-filters-create-envelope.input';
import { PushNotificationCampaignStatus } from '../prisma/push-notification-campaign-status.enum';

@InputType()
export class PushNotificationCampaignCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PushNotificationDataCreateEnvelopeInput, {nullable:false})
    notification!: PushNotificationDataCreateEnvelopeInput;

    @Field(() => PushNotificationSenderListType, {nullable:false})
    senderListType!: `${PushNotificationSenderListType}`;

    @Field(() => [EduInstituteSelectOptionCreateInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionCreateInput>;

    @Field(() => PushNotificationCampaignFiltersCreateEnvelopeInput, {nullable:false})
    filters!: PushNotificationCampaignFiltersCreateEnvelopeInput;

    @Field(() => PushNotificationCampaignStatus, {nullable:false})
    status!: `${PushNotificationCampaignStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
