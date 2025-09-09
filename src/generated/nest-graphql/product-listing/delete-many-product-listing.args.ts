import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductListingWhereInput } from './product-listing-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProductListingArgs {

    @Field(() => ProductListingWhereInput, {nullable:true})
    @Type(() => ProductListingWhereInput)
    where?: ProductListingWhereInput;
}
