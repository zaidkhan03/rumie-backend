import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdvertiserPOCCreateEnvelopeInput } from '../advertiser-poc/advertiser-poc-create-envelope.input';
import { AdUncheckedCreateNestedManyWithoutAdvertiserInput } from '../ad/ad-unchecked-create-nested-many-without-advertiser.input';

@InputType()
export class AdvertiserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    companyName!: string;

    @Field(() => String, {nullable:false})
    companyWebsiteUrl!: string;

    @Field(() => String, {nullable:false})
    logo!: string;

    @Field(() => String, {nullable:false})
    address1!: string;

    @Field(() => String, {nullable:true})
    address2?: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    zip!: string;

    @Field(() => AdvertiserPOCCreateEnvelopeInput, {nullable:false})
    pointOfContact!: AdvertiserPOCCreateEnvelopeInput;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AdUncheckedCreateNestedManyWithoutAdvertiserInput, {nullable:true})
    ads?: AdUncheckedCreateNestedManyWithoutAdvertiserInput;
}
