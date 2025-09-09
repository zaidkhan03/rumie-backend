import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerType } from '../prisma/banner-type.enum';
import { BannerImageCreateEnvelopeInput } from '../banner-image/banner-image-create-envelope.input';
import { BannerImageCreateInput } from '../banner-image/banner-image-create.input';
import { DateRangeCreateEnvelopeInput } from '../date-range/date-range-create-envelope.input';
import { BannerCreatepositionsInput } from './banner-createpositions.input';

@InputType()
export class BannerCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => BannerType, {nullable:false})
    type!: `${BannerType}`;

    @Field(() => BannerImageCreateEnvelopeInput, {nullable:false})
    image!: BannerImageCreateEnvelopeInput;

    @Field(() => [BannerImageCreateInput], {nullable:true})
    images?: Array<BannerImageCreateInput>;

    @Field(() => DateRangeCreateEnvelopeInput, {nullable:false})
    validity!: DateRangeCreateEnvelopeInput;

    @Field(() => BannerCreatepositionsInput, {nullable:true})
    positions?: BannerCreatepositionsInput;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
