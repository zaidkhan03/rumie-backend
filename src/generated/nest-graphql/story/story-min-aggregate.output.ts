import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StoryType } from '../prisma/story-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StoryMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => StoryType, {nullable:true})
    type?: `${StoryType}`;

    @Field(() => String, {nullable:true})
    caption?: string;

    @Field(() => String, {nullable:true})
    backgroundColor?: string;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => String, {nullable:true})
    eduInstituteId?: string;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    archived?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
