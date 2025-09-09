import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingSnapshotCreateInput } from './product-listing-snapshot-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductListingSnapshotCreateEnvelopeInput {

    @Field(() => ProductListingSnapshotCreateInput, {nullable:true})
    @Type(() => ProductListingSnapshotCreateInput)
    set?: ProductListingSnapshotCreateInput;
}
