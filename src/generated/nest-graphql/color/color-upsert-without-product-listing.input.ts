import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColorUpdateWithoutProductListingInput } from './color-update-without-product-listing.input';
import { Type } from 'class-transformer';
import { ColorCreateWithoutProductListingInput } from './color-create-without-product-listing.input';
import { ColorWhereInput } from './color-where.input';

@InputType()
export class ColorUpsertWithoutProductListingInput {

    @Field(() => ColorUpdateWithoutProductListingInput, {nullable:false})
    @Type(() => ColorUpdateWithoutProductListingInput)
    update!: ColorUpdateWithoutProductListingInput;

    @Field(() => ColorCreateWithoutProductListingInput, {nullable:false})
    @Type(() => ColorCreateWithoutProductListingInput)
    create!: ColorCreateWithoutProductListingInput;

    @Field(() => ColorWhereInput, {nullable:true})
    @Type(() => ColorWhereInput)
    where?: ColorWhereInput;
}
