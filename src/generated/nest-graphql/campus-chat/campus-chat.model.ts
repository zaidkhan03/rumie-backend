import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CampusChatType } from '../prisma/campus-chat-type.enum';
import { EduInstitute } from '../edu-institute/edu-institute.model';

@ObjectType()
export class CampusChat {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    eduInstituteId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CampusChatType, {nullable:false})
    type!: `${CampusChatType}`;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => EduInstitute, {nullable:false})
    eduInstitute?: EduInstitute;
}
