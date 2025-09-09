import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColorWhereInput } from './color-where.input';
import { Type } from 'class-transformer';
import { ColorUpdateWithoutProductListingInput } from './color-update-without-product-listing.input';

@InputType()
export class ColorUpdateToOneWithWhereWithoutProductListingInput {

    @Field(() => ColorWhereInput, {nullable:true})
    @Type(() => ColorWhereInput)
    where?: ColorWhereInput;

    @Field(() => ColorUpdateWithoutProductListingInput, {nullable:false})
    @Type(() => ColorUpdateWithoutProductListingInput)
    data!: ColorUpdateWithoutProductListingInput;
}
