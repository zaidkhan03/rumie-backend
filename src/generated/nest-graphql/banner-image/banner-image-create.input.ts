import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CTAType } from '../prisma/cta-type.enum';

@InputType()
export class BannerImageCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CTAType, {nullable:false})
    CTAType!: `${CTAType}`;

    @Field(() => String, {nullable:false})
    CTAPayload!: string;
}
