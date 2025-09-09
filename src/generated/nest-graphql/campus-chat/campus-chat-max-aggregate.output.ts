import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampusChatType } from '../prisma/campus-chat-type.enum';

@ObjectType()
export class CampusChatMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    eduInstituteId?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => CampusChatType, {nullable:true})
    type?: `${CampusChatType}`;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
