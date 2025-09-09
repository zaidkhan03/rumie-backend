import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteSelectOptionCreateInput } from '../edu-institute-select-option/edu-institute-select-option-create.input';
import { DealBusinessDetailsCreateEnvelopeInput } from '../deal-business-details/deal-business-details-create-envelope.input';
import { DealTextContentCreateEnvelopeInput } from '../deal-text-content/deal-text-content-create-envelope.input';
import { DealType } from '../prisma/deal-type.enum';
import { DateRangeCreateEnvelopeInput } from '../date-range/date-range-create-envelope.input';

@InputType()
export class DealCreateWithoutSavedUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => [EduInstituteSelectOptionCreateInput], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOptionCreateInput>;

    @Field(() => DealBusinessDetailsCreateEnvelopeInput, {nullable:false})
    business!: DealBusinessDetailsCreateEnvelopeInput;

    @Field(() => DealTextContentCreateEnvelopeInput, {nullable:false})
    content!: DealTextContentCreateEnvelopeInput;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => DealType, {nullable:false})
    type!: `${DealType}`;

    @Field(() => String, {nullable:true})
    couponCode?: string;

    @Field(() => DateRangeCreateEnvelopeInput, {nullable:false})
    validity!: DateRangeCreateEnvelopeInput;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
