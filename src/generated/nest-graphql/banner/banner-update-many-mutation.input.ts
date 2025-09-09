import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumBannerTypeFieldUpdateOperationsInput } from '../prisma/enum-banner-type-field-update-operations.input';
import { BannerImageUpdateEnvelopeInput } from '../banner-image/banner-image-update-envelope.input';
import { BannerImageCreateInput } from '../banner-image/banner-image-create.input';
import { DateRangeUpdateEnvelopeInput } from '../date-range/date-range-update-envelope.input';
import { BannerUpdatepositionsInput } from './banner-updatepositions.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class BannerUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumBannerTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumBannerTypeFieldUpdateOperationsInput;

    @Field(() => BannerImageUpdateEnvelopeInput, {nullable:true})
    image?: BannerImageUpdateEnvelopeInput;

    @Field(() => [BannerImageCreateInput], {nullable:true})
    images?: Array<BannerImageCreateInput>;

    @Field(() => DateRangeUpdateEnvelopeInput, {nullable:true})
    validity?: DateRangeUpdateEnvelopeInput;

    @Field(() => BannerUpdatepositionsInput, {nullable:true})
    positions?: BannerUpdatepositionsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
