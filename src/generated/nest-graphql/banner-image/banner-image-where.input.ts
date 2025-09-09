import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCTATypeFilter } from '../prisma/enum-cta-type-filter.input';

@InputType()
export class BannerImageWhereInput {

    @Field(() => [BannerImageWhereInput], {nullable:true})
    AND?: Array<BannerImageWhereInput>;

    @Field(() => [BannerImageWhereInput], {nullable:true})
    OR?: Array<BannerImageWhereInput>;

    @Field(() => [BannerImageWhereInput], {nullable:true})
    NOT?: Array<BannerImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumCTATypeFilter, {nullable:true})
    CTAType?: EnumCTATypeFilter;

    @Field(() => StringFilter, {nullable:true})
    CTAPayload?: StringFilter;
}
