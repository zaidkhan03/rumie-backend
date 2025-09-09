import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AltSignupStatus } from '../prisma/alt-signup-status.enum';

@ObjectType()
export class AltSignup {

    @Field(() => String, {nullable:false})
    idProof!: string;

    @Field(() => Date, {nullable:false})
    uploadedAt!: Date;

    @Field(() => String, {nullable:false})
    tempEmailAllotted!: string;

    @Field(() => String, {nullable:false})
    emailClaimed!: string;

    @Field(() => AltSignupStatus, {nullable:false})
    status!: `${AltSignupStatus}`;

    @Field(() => String, {nullable:false})
    remarks!: string;
}
