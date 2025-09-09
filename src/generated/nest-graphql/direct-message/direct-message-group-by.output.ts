import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DMType } from '../prisma/dm-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DirectMessageCountAggregate } from './direct-message-count-aggregate.output';
import { DirectMessageMinAggregate } from './direct-message-min-aggregate.output';
import { DirectMessageMaxAggregate } from './direct-message-max-aggregate.output';

@ObjectType()
export class DirectMessageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DirectMessageCountAggregate, {nullable:true})
    _count?: DirectMessageCountAggregate;

    @Field(() => DirectMessageMinAggregate, {nullable:true})
    _min?: DirectMessageMinAggregate;

    @Field(() => DirectMessageMaxAggregate, {nullable:true})
    _max?: DirectMessageMaxAggregate;
}
