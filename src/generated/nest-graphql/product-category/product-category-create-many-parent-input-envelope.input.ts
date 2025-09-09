import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCategoryCreateManyParentInput } from './product-category-create-many-parent.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCategoryCreateManyParentInputEnvelope {

    @Field(() => [ProductCategoryCreateManyParentInput], {nullable:false})
    @Type(() => ProductCategoryCreateManyParentInput)
    data!: Array<ProductCategoryCreateManyParentInput>;
}
