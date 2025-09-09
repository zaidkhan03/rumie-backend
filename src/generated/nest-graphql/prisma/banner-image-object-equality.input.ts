import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CTAType } from './cta-type.enum';

@InputType()
export class BannerImageObjectEqualityInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CTAType, {nullable:false})
    CTAType!: `${CTAType}`;

    @Field(() => String, {nullable:false})
    CTAPayload!: string;
}
