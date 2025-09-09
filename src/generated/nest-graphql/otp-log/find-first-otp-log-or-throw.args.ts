import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OtpLogWhereInput } from './otp-log-where.input';
import { Type } from 'class-transformer';
import { OtpLogOrderByWithRelationInput } from './otp-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OtpLogWhereUniqueInput } from './otp-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OtpLogScalarFieldEnum } from './otp-log-scalar-field.enum';

@ArgsType()
export class FindFirstOtpLogOrThrowArgs {

    @Field(() => OtpLogWhereInput, {nullable:true})
    @Type(() => OtpLogWhereInput)
    where?: OtpLogWhereInput;

    @Field(() => [OtpLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OtpLogOrderByWithRelationInput>;

    @Field(() => OtpLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OtpLogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OtpLogScalarFieldEnum], {nullable:true})
    distinct?: Array<`${OtpLogScalarFieldEnum}`>;
}
