import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FeaturedProductCategoryObjectEqualityInput {

    @Field(() => Boolean, {nullable:false})
    status!: boolean;

    @Field(() => String, {nullable:false})
    image!: string;
}
