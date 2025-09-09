import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AdminRole } from '../prisma/admin-role.enum';
import { AdminSession } from '../admin-session/admin-session.model';

@ObjectType()
export class Admin {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    countryCode!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => [AdminRole], {nullable:true})
    roles!: Array<`${AdminRole}`>;

    @Field(() => [AdminSession], {nullable:true})
    sessions?: Array<AdminSession>;
}
