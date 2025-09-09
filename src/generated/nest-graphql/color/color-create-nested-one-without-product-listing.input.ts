import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColorCreateWithoutProductListingInput } from './color-create-without-product-listing.input';
import { Type } from 'class-transformer';
import { ColorCreateOrConnectWithoutProductListingInput } from './color-create-or-connect-without-product-listing.input';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';

@InputType()
export class ColorCreateNestedOneWithoutProductListingInput {

    @Field(() => ColorCreateWithoutProductListingInput, {nullable:true})
    @Type(() => ColorCreateWithoutProductListingInput)
    create?: ColorCreateWithoutProductListingInput;

    @Field(() => ColorCreateOrConnectWithoutProductListingInput, {nullable:true})
    @Type(() => ColorCreateOrConnectWithoutProductListingInput)
    connectOrCreate?: ColorCreateOrConnectWithoutProductListingInput;

    @Field(() => ColorWhereUniqueInput, {nullable:true})
    @Type(() => ColorWhereUniqueInput)
    connect?: Prisma.AtLeast<ColorWhereUniqueInput, 'id'>;
}
