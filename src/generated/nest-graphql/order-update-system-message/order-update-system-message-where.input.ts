import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumSystemIconsFilter } from '../prisma/enum-system-icons-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class OrderUpdateSystemMessageWhereInput {

    @Field(() => [OrderUpdateSystemMessageWhereInput], {nullable:true})
    AND?: Array<OrderUpdateSystemMessageWhereInput>;

    @Field(() => [OrderUpdateSystemMessageWhereInput], {nullable:true})
    OR?: Array<OrderUpdateSystemMessageWhereInput>;

    @Field(() => [OrderUpdateSystemMessageWhereInput], {nullable:true})
    NOT?: Array<OrderUpdateSystemMessageWhereInput>;

    @Field(() => EnumSystemIconsFilter, {nullable:true})
    icon1?: EnumSystemIconsFilter;

    @Field(() => EnumSystemIconsFilter, {nullable:true})
    icon2?: EnumSystemIconsFilter;

    @Field(() => EnumSystemIconsFilter, {nullable:true})
    icon3?: EnumSystemIconsFilter;

    @Field(() => StringFilter, {nullable:true})
    text1?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text2?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text3?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    trackingNumber?: StringFilter;
}
