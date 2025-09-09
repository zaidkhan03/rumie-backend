import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AdvertiserPOC } from '../advertiser-poc/advertiser-poc.model';
import { Ad } from '../ad/ad.model';
import { AdvertiserCount } from './advertiser-count.output';

@ObjectType()
export class Advertiser {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    companyName!: string;

    @Field(() => String, {nullable:false})
    companyWebsiteUrl!: string;

    @Field(() => String, {nullable:false})
    logo!: string;

    @Field(() => String, {nullable:false})
    address1!: string;

    @Field(() => String, {nullable:true})
    address2!: string | null;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    zip!: string;

    @Field(() => AdvertiserPOC, {nullable:false})
    pointOfContact?: AdvertiserPOC;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Ad], {nullable:true})
    ads?: Array<Ad>;

    @Field(() => AdvertiserCount, {nullable:false})
    _count?: AdvertiserCount;
}
