import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FeaturedProductCategory {

    @Field(() => Boolean, {nullable:false})
    status!: boolean;

    @Field(() => String, {nullable:false})
    image!: string;
}
