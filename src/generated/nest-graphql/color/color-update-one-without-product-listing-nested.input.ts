import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColorCreateWithoutProductListingInput } from './color-create-without-product-listing.input';
import { Type } from 'class-transformer';
import { ColorCreateOrConnectWithoutProductListingInput } from './color-create-or-connect-without-product-listing.input';
import { ColorUpsertWithoutProductListingInput } from './color-upsert-without-product-listing.input';
import { ColorWhereInput } from './color-where.input';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';
import { ColorUpdateToOneWithWhereWithoutProductListingInput } from './color-update-to-one-with-where-without-product-listing.input';

@InputType()
export class ColorUpdateOneWithoutProductListingNestedInput {

    @Field(() => ColorCreateWithoutProductListingInput, {nullable:true})
    @Type(() => ColorCreateWithoutProductListingInput)
    create?: ColorCreateWithoutProductListingInput;

    @Field(() => ColorCreateOrConnectWithoutProductListingInput, {nullable:true})
    @Type(() => ColorCreateOrConnectWithoutProductListingInput)
    connectOrCreate?: ColorCreateOrConnectWithoutProductListingInput;

    @Field(() => ColorUpsertWithoutProductListingInput, {nullable:true})
    @Type(() => ColorUpsertWithoutProductListingInput)
    upsert?: ColorUpsertWithoutProductListingInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => ColorWhereInput, {nullable:true})
    @Type(() => ColorWhereInput)
    delete?: ColorWhereInput;

    @Field(() => ColorWhereUniqueInput, {nullable:true})
    @Type(() => ColorWhereUniqueInput)
    connect?: Prisma.AtLeast<ColorWhereUniqueInput, 'id'>;

    @Field(() => ColorUpdateToOneWithWhereWithoutProductListingInput, {nullable:true})
    @Type(() => ColorUpdateToOneWithWhereWithoutProductListingInput)
    update?: ColorUpdateToOneWithWhereWithoutProductListingInput;
}
