import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CampusChatType } from '../prisma/campus-chat-type.enum';
import { CampusChatCountAggregate } from './campus-chat-count-aggregate.output';
import { CampusChatMinAggregate } from './campus-chat-min-aggregate.output';
import { CampusChatMaxAggregate } from './campus-chat-max-aggregate.output';

@ObjectType()
export class CampusChatGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    eduInstituteId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CampusChatType, {nullable:false})
    type!: `${CampusChatType}`;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CampusChatCountAggregate, {nullable:true})
    _count?: CampusChatCountAggregate;

    @Field(() => CampusChatMinAggregate, {nullable:true})
    _min?: CampusChatMinAggregate;

    @Field(() => CampusChatMaxAggregate, {nullable:true})
    _max?: CampusChatMaxAggregate;
}
