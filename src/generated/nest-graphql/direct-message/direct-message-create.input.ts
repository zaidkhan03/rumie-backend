import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DMType } from '../prisma/dm-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DirectMessageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    clientId!: string;

    @Field(() => String, {nullable:false})
    senderId!: string;

    @Field(() => DMType, {nullable:false})
    type!: `${DMType}`;

    @Field(() => GraphQLJSON, {nullable:false})
    payload!: any;

    @Field(() => String, {nullable:false})
    personalDmId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
