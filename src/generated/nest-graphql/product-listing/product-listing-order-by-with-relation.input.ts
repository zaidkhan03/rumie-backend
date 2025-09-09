import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MediaItemOrderByCompositeAggregateInput } from '../media-item/media-item-order-by-composite-aggregate.input';
import { RentingPreferenceOrderByInput } from '../renting-preference/renting-preference-order-by.input';
import { ProductCategoryOrderByWithRelationInput } from '../product-category/product-category-order-by-with-relation.input';
import { BrandOrderByWithRelationInput } from '../brand/brand-order-by-with-relation.input';
import { ColorOrderByWithRelationInput } from '../color/color-order-by-with-relation.input';
import { WeightCategoryOrderByWithRelationInput } from '../weight-category/weight-category-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { ConversationOrderByRelationAggregateInput } from '../conversation/conversation-order-by-relation-aggregate.input';
import { ProductReportOrderByRelationAggregateInput } from '../product-report/product-report-order-by-relation-aggregate.input';
import { EduInstituteOrderByWithRelationInput } from '../edu-institute/edu-institute-order-by-with-relation.input';

@InputType()
export class ProductListingOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => MediaItemOrderByCompositeAggregateInput, {nullable:true})
    media?: MediaItemOrderByCompositeAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    selectedCategoryFilters?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    extendedData?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    brandId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    colorId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productCondition?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productDeliveryMode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingChargePayer?: `${SortOrder}`;

    @Field(() => RentingPreferenceOrderByInput, {nullable:true})
    rentingPreference?: RentingPreferenceOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    weightCategoryId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    uploaderId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    priceString?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    reasonForSelling?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingEnabled?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingFrom?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    active?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    soldOut?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    blackListed?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    wishlistedUserIds?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    legacyHash?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    archived?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    categoryPreferredGender?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    uploaderEduInstituteId?: `${SortOrder}`;

    @Field(() => ProductCategoryOrderByWithRelationInput, {nullable:true})
    category?: ProductCategoryOrderByWithRelationInput;

    @Field(() => BrandOrderByWithRelationInput, {nullable:true})
    brand?: BrandOrderByWithRelationInput;

    @Field(() => ColorOrderByWithRelationInput, {nullable:true})
    color?: ColorOrderByWithRelationInput;

    @Field(() => WeightCategoryOrderByWithRelationInput, {nullable:true})
    weightCategory?: WeightCategoryOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    uploader?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    wishlistedBy?: UserOrderByRelationAggregateInput;

    @Field(() => ConversationOrderByRelationAggregateInput, {nullable:true})
    conversations?: ConversationOrderByRelationAggregateInput;

    @Field(() => ProductReportOrderByRelationAggregateInput, {nullable:true})
    reports?: ProductReportOrderByRelationAggregateInput;

    @Field(() => EduInstituteOrderByWithRelationInput, {nullable:true})
    uploaderEduInstitute?: EduInstituteOrderByWithRelationInput;
}
