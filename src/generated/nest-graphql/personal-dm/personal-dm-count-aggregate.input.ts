import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PersonalDMCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    initiatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    participantIds?: true;

    @Field(() => Boolean, {nullable:true})
    lastMessageId?: true;

    @Field(() => Boolean, {nullable:true})
    valid?: true;

    @Field(() => Boolean, {nullable:true})
    enabled?: true;

    @Field(() => Boolean, {nullable:true})
    payload?: true;

    @Field(() => Boolean, {nullable:true})
    consumersLastSeen?: true;

    @Field(() => Boolean, {nullable:true})
    providersLastSeen?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
