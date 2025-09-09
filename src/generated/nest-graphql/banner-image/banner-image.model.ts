import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CTAType } from '../prisma/cta-type.enum';

@ObjectType()
export class BannerImage {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CTAType, {nullable:false})
    CTAType!: `${CTAType}`;

    @Field(() => String, {nullable:false})
    CTAPayload!: string;
}
