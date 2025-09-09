import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';
import { Type } from 'class-transformer';
import { ColorCreateWithoutProductListingInput } from './color-create-without-product-listing.input';

@InputType()
export class ColorCreateOrConnectWithoutProductListingInput {

    @Field(() => ColorWhereUniqueInput, {nullable:false})
    @Type(() => ColorWhereUniqueInput)
    where!: Prisma.AtLeast<ColorWhereUniqueInput, 'id'>;

    @Field(() => ColorCreateWithoutProductListingInput, {nullable:false})
    @Type(() => ColorCreateWithoutProductListingInput)
    create!: ColorCreateWithoutProductListingInput;
}
