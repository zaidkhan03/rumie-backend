import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateRangeCreateEnvelopeInput } from '../date-range/date-range-create-envelope.input';
import { PromoCodeType } from '../prisma/promo-code-type.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class PromoCodeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => DateRangeCreateEnvelopeInput, {nullable:false})
    validity!: DateRangeCreateEnvelopeInput;

    @Field(() => PromoCodeType, {nullable:false})
    type!: `${PromoCodeType}`;

    @Field(() => Int, {nullable:false})
    value!: number;

    @Field(() => Int, {nullable:false})
    usageLimit!: number;

    @Field(() => Int, {nullable:true})
    useCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
