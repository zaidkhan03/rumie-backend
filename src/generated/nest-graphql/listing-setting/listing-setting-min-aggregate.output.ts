import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ListingSettingMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    enableSelling?: boolean;

    @Field(() => Boolean, {nullable:true})
    enableRenting?: boolean;

    @Field(() => Int, {nullable:true})
    sellerFees?: number;

    @Field(() => Int, {nullable:true})
    taxes?: number;

    @Field(() => Int, {nullable:true})
    creditProcessing?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
