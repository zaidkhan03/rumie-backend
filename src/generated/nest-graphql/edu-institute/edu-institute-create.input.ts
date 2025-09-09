import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutEduInstituteInput } from '../user/user-create-nested-many-without-edu-institute.input';
import { CampusChatCreateNestedManyWithoutEduInstituteInput } from '../campus-chat/campus-chat-create-nested-many-without-edu-institute.input';
import { ProductListingCreateNestedManyWithoutUploaderEduInstituteInput } from '../product-listing/product-listing-create-nested-many-without-uploader-edu-institute.input';

@InputType()
export class EduInstituteCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    domain!: string;

    @Field(() => String, {nullable:true})
    logo?: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    zip!: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    passCode?: string;

    @Field(() => Boolean, {nullable:true})
    isRegistered?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutEduInstituteInput, {nullable:true})
    students?: UserCreateNestedManyWithoutEduInstituteInput;

    @Field(() => CampusChatCreateNestedManyWithoutEduInstituteInput, {nullable:true})
    campusChats?: CampusChatCreateNestedManyWithoutEduInstituteInput;

    @Field(() => ProductListingCreateNestedManyWithoutUploaderEduInstituteInput, {nullable:true})
    productListings?: ProductListingCreateNestedManyWithoutUploaderEduInstituteInput;
}
