import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AltSignupStatus } from './alt-signup-status.enum';

@InputType()
export class AltSignupObjectEqualityInput {

    @Field(() => String, {nullable:false})
    idProof!: string;

    @Field(() => Date, {nullable:false})
    uploadedAt!: Date | string;

    @Field(() => String, {nullable:false})
    tempEmailAllotted!: string;

    @Field(() => String, {nullable:false})
    emailClaimed!: string;

    @Field(() => AltSignupStatus, {nullable:false})
    status!: `${AltSignupStatus}`;

    @Field(() => String, {nullable:false})
    remarks!: string;
}
