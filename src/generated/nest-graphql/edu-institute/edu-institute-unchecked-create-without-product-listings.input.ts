import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutEduInstituteInput } from '../user/user-unchecked-create-nested-many-without-edu-institute.input';
import { CampusChatUncheckedCreateNestedManyWithoutEduInstituteInput } from '../campus-chat/campus-chat-unchecked-create-nested-many-without-edu-institute.input';

@InputType()
export class EduInstituteUncheckedCreateWithoutProductListingsInput {

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

    @Field(() => UserUncheckedCreateNestedManyWithoutEduInstituteInput, {nullable:true})
    students?: UserUncheckedCreateNestedManyWithoutEduInstituteInput;

    @Field(() => CampusChatUncheckedCreateNestedManyWithoutEduInstituteInput, {nullable:true})
    campusChats?: CampusChatUncheckedCreateNestedManyWithoutEduInstituteInput;
}
