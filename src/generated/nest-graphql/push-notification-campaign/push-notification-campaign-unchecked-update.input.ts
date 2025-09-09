import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PushNotificationDataUpdateEnvelopeInput } from '../push-notification-data/push-notification-data-update-envelope.input';
import { EnumPushNotificationSenderListTypeFieldUpdateOperationsInput } from '../prisma/enum-push-notification-sender-list-type-field-update-operations.input';
import { EduInstituteSelectOptionCreateInput } from '../edu-institute-select-option/edu-institute-select-option-create.input';
import { PushNotificationCampaignFiltersUpdateEnvelopeInput } from './push-notification-campaign-filters-update-envelope.input';
import { EnumPushNotificationCampaignStatusFieldUpdateOperationsInput } from '../prisma/enum-push-notification-campaign-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PushNotificationCampaignUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PushNotificationDataUpdateEnvelopeInput, {nullable:true})
    notification?: PushNotificationDataUpdateEnvelopeInput;

    @Field(() => EnumPushNotificationSenderListTypeFieldUpdateOperationsInput, {nullable:true})
    senderListType?: EnumPushNotificationSenderListTypeFieldUpdateOperationsInput;

    @Field(() => [EduInstituteSelectOptionCreateInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionCreateInput>;

    @Field(() => PushNotificationCampaignFiltersUpdateEnvelopeInput, {nullable:true})
    filters?: PushNotificationCampaignFiltersUpdateEnvelopeInput;

    @Field(() => EnumPushNotificationCampaignStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumPushNotificationCampaignStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
