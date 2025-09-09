import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { CampusChat } from '../campus-chat/campus-chat.model';
import { ProductListing } from '../product-listing/product-listing.model';
import { EduInstituteCount } from './edu-institute-count.output';

@ObjectType()
export class EduInstitute {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    domain!: string;

    @Field(() => String, {nullable:true})
    logo!: string | null;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    zip!: string;

    @Field(() => String, {nullable:true})
    location!: string | null;

    @Field(() => Boolean, {nullable:true})
    active!: boolean | null;

    @Field(() => String, {nullable:true})
    passCode!: string | null;

    @Field(() => Boolean, {nullable:true})
    isRegistered!: boolean | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [User], {nullable:true})
    students?: Array<User>;

    @Field(() => [CampusChat], {nullable:true})
    campusChats?: Array<CampusChat>;

    @Field(() => [ProductListing], {nullable:true})
    productListings?: Array<ProductListing>;

    @Field(() => EduInstituteCount, {nullable:false})
    _count?: EduInstituteCount;
}
