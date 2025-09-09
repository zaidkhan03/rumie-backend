import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PreferredGender } from '../prisma/preferred-gender.enum';

@ObjectType()
export class ProductCategoryMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    parentId?: string;

    @Field(() => PreferredGender, {nullable:true})
    preferredGender?: `${PreferredGender}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Boolean, {nullable:true})
    shippable?: boolean;
}
