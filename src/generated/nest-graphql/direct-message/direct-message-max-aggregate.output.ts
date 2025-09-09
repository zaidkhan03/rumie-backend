import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DMType } from '../prisma/dm-type.enum';

@ObjectType()
export class DirectMessageMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    clientId?: string;

    @Field(() => String, {nullable:true})
    senderId?: string;

    @Field(() => DMType, {nullable:true})
    type?: `${DMType}`;

    @Field(() => String, {nullable:true})
    personalDmId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
