import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteWhereInput } from './edu-institute-where.input';
import { Type } from 'class-transformer';
import { EduInstituteUpdateWithoutProductListingsInput } from './edu-institute-update-without-product-listings.input';

@InputType()
export class EduInstituteUpdateToOneWithWhereWithoutProductListingsInput {

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    where?: EduInstituteWhereInput;

    @Field(() => EduInstituteUpdateWithoutProductListingsInput, {nullable:false})
    @Type(() => EduInstituteUpdateWithoutProductListingsInput)
    data!: EduInstituteUpdateWithoutProductListingsInput;
}
