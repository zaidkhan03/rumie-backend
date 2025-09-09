import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MediaItemOrderByCompositeAggregateInput } from '../media-item/media-item-order-by-composite-aggregate.input';
import { PackageWeightOrderByInput } from '../package-weight/package-weight-order-by.input';
import { PackageDimensionsOrderByInput } from '../package-dimensions/package-dimensions-order-by.input';

@InputType()
export class ProductListingSnapshotOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    productCondition?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    colorName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    brandName?: `${SortOrder}`;

    @Field(() => MediaItemOrderByCompositeAggregateInput, {nullable:true})
    media?: MediaItemOrderByCompositeAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    deliveryMode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    shippingFrom?: `${SortOrder}`;

    @Field(() => PackageWeightOrderByInput, {nullable:true})
    packageWeight?: PackageWeightOrderByInput;

    @Field(() => PackageDimensionsOrderByInput, {nullable:true})
    packageDimensions?: PackageDimensionsOrderByInput;
}
