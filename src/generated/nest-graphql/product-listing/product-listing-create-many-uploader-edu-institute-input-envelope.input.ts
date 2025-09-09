import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductListingCreateManyUploaderEduInstituteInput } from './product-listing-create-many-uploader-edu-institute.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductListingCreateManyUploaderEduInstituteInputEnvelope {

    @Field(() => [ProductListingCreateManyUploaderEduInstituteInput], {nullable:false})
    @Type(() => ProductListingCreateManyUploaderEduInstituteInput)
    data!: Array<ProductListingCreateManyUploaderEduInstituteInput>;
}
