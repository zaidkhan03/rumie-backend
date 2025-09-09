import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminRole } from '../prisma/admin-role.enum';
import { AdminCountAggregate } from './admin-count-aggregate.output';
import { AdminMinAggregate } from './admin-min-aggregate.output';
import { AdminMaxAggregate } from './admin-max-aggregate.output';

@ObjectType()
export class AdminGroupBy {

    @Field(() => String, {nullable:false})
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
    roles?: Array<`${AdminRole}`>;

    @Field(() => AdminCountAggregate, {nullable:true})
    _count?: AdminCountAggregate;

    @Field(() => AdminMinAggregate, {nullable:true})
    _min?: AdminMinAggregate;

    @Field(() => AdminMaxAggregate, {nullable:true})
    _max?: AdminMaxAggregate;
}
