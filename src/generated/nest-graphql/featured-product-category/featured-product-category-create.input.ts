import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FeaturedProductCategoryCreateInput {

    @Field(() => Boolean, {nullable:false})
    status!: boolean;

    @Field(() => String, {nullable:false})
    image!: string;
}
