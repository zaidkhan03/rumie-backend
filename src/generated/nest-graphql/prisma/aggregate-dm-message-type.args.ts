import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DMMessageTypeWhereInput } from '../dm-message-type/dm-message-type-where.input';
import { Type } from 'class-transformer';
import { DMMessageTypeOrderByWithRelationInput } from '../dm-message-type/dm-message-type-order-by-with-relation.input';
import { DMMessageTypeWhereUniqueInput } from '../dm-message-type/dm-message-type-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateDmMessageTypeArgs {

    @Field(() => DMMessageTypeWhereInput, {nullable:true})
    @Type(() => DMMessageTypeWhereInput)
    where?: DMMessageTypeWhereInput;

    @Field(() => [DMMessageTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DMMessageTypeOrderByWithRelationInput>;

    @Field(() => DMMessageTypeWhereUniqueInput, {nullable:true})
    cursor?: DMMessageTypeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
