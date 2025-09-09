import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PaymentLinkMessageWhereInput {

    @Field(() => [PaymentLinkMessageWhereInput], {nullable:true})
    AND?: Array<PaymentLinkMessageWhereInput>;

    @Field(() => [PaymentLinkMessageWhereInput], {nullable:true})
    OR?: Array<PaymentLinkMessageWhereInput>;

    @Field(() => [PaymentLinkMessageWhereInput], {nullable:true})
    NOT?: Array<PaymentLinkMessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    mainText?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    disclaimerText?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    amount?: StringFilter;
}
