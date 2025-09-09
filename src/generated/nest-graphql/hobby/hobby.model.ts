import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { HobbyCount } from './hobby-count.output';

@ObjectType()
export class Hobby {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    active!: boolean;

    @Field(() => [String], {nullable:true})
    userIds!: Array<string>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => HobbyCount, {nullable:false})
    _count?: HobbyCount;
}
