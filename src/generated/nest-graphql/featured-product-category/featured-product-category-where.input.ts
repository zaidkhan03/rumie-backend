import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class FeaturedProductCategoryWhereInput {

    @Field(() => [FeaturedProductCategoryWhereInput], {nullable:true})
    AND?: Array<FeaturedProductCategoryWhereInput>;

    @Field(() => [FeaturedProductCategoryWhereInput], {nullable:true})
    OR?: Array<FeaturedProductCategoryWhereInput>;

    @Field(() => [FeaturedProductCategoryWhereInput], {nullable:true})
    NOT?: Array<FeaturedProductCategoryWhereInput>;

    @Field(() => BoolFilter, {nullable:true})
    status?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;
}
