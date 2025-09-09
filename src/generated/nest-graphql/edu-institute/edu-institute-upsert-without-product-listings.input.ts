import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteUpdateWithoutProductListingsInput } from './edu-institute-update-without-product-listings.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateWithoutProductListingsInput } from './edu-institute-create-without-product-listings.input';
import { EduInstituteWhereInput } from './edu-institute-where.input';

@InputType()
export class EduInstituteUpsertWithoutProductListingsInput {

    @Field(() => EduInstituteUpdateWithoutProductListingsInput, {nullable:false})
    @Type(() => EduInstituteUpdateWithoutProductListingsInput)
    update!: EduInstituteUpdateWithoutProductListingsInput;

    @Field(() => EduInstituteCreateWithoutProductListingsInput, {nullable:false})
    @Type(() => EduInstituteCreateWithoutProductListingsInput)
    create!: EduInstituteCreateWithoutProductListingsInput;

    @Field(() => EduInstituteWhereInput, {nullable:true})
    @Type(() => EduInstituteWhereInput)
    where?: EduInstituteWhereInput;
}
