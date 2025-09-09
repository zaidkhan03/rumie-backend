import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SupportTicketMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    issue?: true;

    @Field(() => Boolean, {nullable:true})
    initiator?: true;

    @Field(() => Boolean, {nullable:true})
    associatedUserId?: true;

    @Field(() => Boolean, {nullable:true})
    resolved?: true;

    @Field(() => Boolean, {nullable:true})
    concernedId?: true;

    @Field(() => Boolean, {nullable:true})
    userLastSeen?: true;

    @Field(() => Boolean, {nullable:true})
    adminLastSeen?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
