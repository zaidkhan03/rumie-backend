import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { PackageDimensionsCompositeFilter } from '../prisma/package-dimensions-composite-filter.input';
import { PackageWeightCompositeFilter } from '../prisma/package-weight-composite-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductListingListRelationFilter } from '../product-listing/product-listing-list-relation-filter.input';

@InputType()
export class WeightCategoryWhereInput {

    @Field(() => [WeightCategoryWhereInput], {nullable:true})
    AND?: Array<WeightCategoryWhereInput>;

    @Field(() => [WeightCategoryWhereInput], {nullable:true})
    OR?: Array<WeightCategoryWhereInput>;

    @Field(() => [WeightCategoryWhereInput], {nullable:true})
    NOT?: Array<WeightCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    alias?: StringFilter;

    @Field(() => PackageDimensionsCompositeFilter, {nullable:true})
    packageDimensions?: PackageDimensionsCompositeFilter;

    @Field(() => PackageWeightCompositeFilter, {nullable:true})
    packageWeight?: PackageWeightCompositeFilter;

    @Field(() => FloatFilter, {nullable:true})
    shippingFee?: FloatFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductListingListRelationFilter, {nullable:true})
    ProductListing?: ProductListingListRelationFilter;
}
