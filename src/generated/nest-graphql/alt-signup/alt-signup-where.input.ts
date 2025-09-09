import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumAltSignupStatusFilter } from '../prisma/enum-alt-signup-status-filter.input';

@InputType()
export class AltSignupWhereInput {

    @Field(() => [AltSignupWhereInput], {nullable:true})
    AND?: Array<AltSignupWhereInput>;

    @Field(() => [AltSignupWhereInput], {nullable:true})
    OR?: Array<AltSignupWhereInput>;

    @Field(() => [AltSignupWhereInput], {nullable:true})
    NOT?: Array<AltSignupWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    idProof?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    uploadedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    tempEmailAllotted?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    emailClaimed?: StringFilter;

    @Field(() => EnumAltSignupStatusFilter, {nullable:true})
    status?: EnumAltSignupStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    remarks?: StringFilter;
}
