import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class PersonalDM {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    initiatedBy!: string;

    @Field(() => [String], {nullable:true})
    participantIds!: Array<string>;

    @Field(() => String, {nullable:true})
    lastMessageId!: string | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    valid!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    enabled!: boolean;

    @Field(() => String, {nullable:true})
    payload!: string | null;

    @Field(() => String, {nullable:true})
    consumersLastSeen!: string | null;

    @Field(() => String, {nullable:true})
    providersLastSeen!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
