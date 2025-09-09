import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NameAndImage } from '../name-and-image/name-and-image.model';

@ObjectType()
export class ListingSetting {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false})
    enableSelling!: boolean;

    @Field(() => Boolean, {nullable:false})
    enableRenting!: boolean;

    @Field(() => [String], {nullable:true})
    reasonsForSelling!: Array<string>;

    @Field(() => [String], {nullable:true})
    meetupPreferences!: Array<string>;

    @Field(() => [String], {nullable:true})
    productDeliveryModes!: Array<string>;

    @Field(() => Int, {nullable:false})
    sellerFees!: number;

    @Field(() => Int, {nullable:false})
    taxes!: number;

    @Field(() => Int, {nullable:false})
    creditProcessing!: number;

    @Field(() => [NameAndImage], {nullable:true})
    genders?: Array<NameAndImage>;

    @Field(() => [NameAndImage], {nullable:true})
    conditions?: Array<NameAndImage>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
