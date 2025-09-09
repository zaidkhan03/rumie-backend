import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { DateRange } from '../date-range/date-range.model';
import { PromoCodeType } from '../prisma/promo-code-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromoCode {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => DateRange, {nullable:false})
    validity?: DateRange;

    @Field(() => PromoCodeType, {nullable:false})
    type!: `${PromoCodeType}`;

    @Field(() => Int, {nullable:false})
    value!: number;

    @Field(() => Int, {nullable:false})
    usageLimit!: number;

    @Field(() => Int, {nullable:true})
    useCount!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
