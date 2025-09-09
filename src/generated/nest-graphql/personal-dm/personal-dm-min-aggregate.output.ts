import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PersonalDMMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    initiatedBy?: string;

    @Field(() => String, {nullable:true})
    lastMessageId?: string;

    @Field(() => Boolean, {nullable:true})
    valid?: boolean;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => String, {nullable:true})
    payload?: string;

    @Field(() => String, {nullable:true})
    consumersLastSeen?: string;

    @Field(() => String, {nullable:true})
    providersLastSeen?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
