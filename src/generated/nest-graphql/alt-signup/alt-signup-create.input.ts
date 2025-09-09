import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AltSignupStatus } from '../prisma/alt-signup-status.enum';

@InputType()
export class AltSignupCreateInput {

    @Field(() => String, {nullable:false})
    idProof!: string;

    @Field(() => Date, {nullable:true})
    uploadedAt?: Date | string;

    @Field(() => String, {nullable:false})
    tempEmailAllotted!: string;

    @Field(() => String, {nullable:false})
    emailClaimed!: string;

    @Field(() => AltSignupStatus, {nullable:false})
    status!: `${AltSignupStatus}`;

    @Field(() => String, {nullable:false})
    remarks!: string;
}
