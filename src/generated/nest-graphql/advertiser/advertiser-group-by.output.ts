import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdvertiserCountAggregate } from './advertiser-count-aggregate.output';
import { AdvertiserMinAggregate } from './advertiser-min-aggregate.output';
import { AdvertiserMaxAggregate } from './advertiser-max-aggregate.output';

@ObjectType()
export class AdvertiserGroupBy {

    @Field(() => String, {nullable:false})
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
    address2?: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    zip!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AdvertiserCountAggregate, {nullable:true})
    _count?: AdvertiserCountAggregate;

    @Field(() => AdvertiserMinAggregate, {nullable:true})
    _min?: AdvertiserMinAggregate;

    @Field(() => AdvertiserMaxAggregate, {nullable:true})
    _max?: AdvertiserMaxAggregate;
}
