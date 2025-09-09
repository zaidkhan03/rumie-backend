import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BannerType } from '../prisma/banner-type.enum';

@ObjectType()
export class BannerMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => BannerType, {nullable:true})
    type?: `${BannerType}`;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
