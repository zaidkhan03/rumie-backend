import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdvertiserPOCObjectEqualityInput } from './advertiser-poc-object-equality.input';
import { AdvertiserPOCWhereInput } from '../advertiser-poc/advertiser-poc-where.input';

@InputType()
export class AdvertiserPOCCompositeFilter {

    @Field(() => AdvertiserPOCObjectEqualityInput, {nullable:true})
    equals?: AdvertiserPOCObjectEqualityInput;

    @Field(() => AdvertiserPOCWhereInput, {nullable:true})
    is?: AdvertiserPOCWhereInput;

    @Field(() => AdvertiserPOCWhereInput, {nullable:true})
    isNot?: AdvertiserPOCWhereInput;
}
