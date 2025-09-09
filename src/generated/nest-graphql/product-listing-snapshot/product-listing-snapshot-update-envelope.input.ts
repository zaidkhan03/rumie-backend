import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingSnapshotCreateInput } from './product-listing-snapshot-create.input';
import { Type } from 'class-transformer';
import { ProductListingSnapshotUpdateInput } from './product-listing-snapshot-update.input';

@InputType()
export class ProductListingSnapshotUpdateEnvelopeInput {

    @Field(() => ProductListingSnapshotCreateInput, {nullable:true})
    @Type(() => ProductListingSnapshotCreateInput)
    set?: ProductListingSnapshotCreateInput;

    @Field(() => ProductListingSnapshotUpdateInput, {nullable:true})
    @Type(() => ProductListingSnapshotUpdateInput)
    update?: ProductListingSnapshotUpdateInput;
}
