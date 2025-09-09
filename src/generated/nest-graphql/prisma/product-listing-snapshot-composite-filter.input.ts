import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingSnapshotObjectEqualityInput } from './product-listing-snapshot-object-equality.input';
import { ProductListingSnapshotWhereInput } from '../product-listing-snapshot/product-listing-snapshot-where.input';

@InputType()
export class ProductListingSnapshotCompositeFilter {

    @Field(() => ProductListingSnapshotObjectEqualityInput, {nullable:true})
    equals?: ProductListingSnapshotObjectEqualityInput;

    @Field(() => ProductListingSnapshotWhereInput, {nullable:true})
    is?: ProductListingSnapshotWhereInput;

    @Field(() => ProductListingSnapshotWhereInput, {nullable:true})
    isNot?: ProductListingSnapshotWhereInput;
}
