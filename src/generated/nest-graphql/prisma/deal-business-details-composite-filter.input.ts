import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealBusinessDetailsObjectEqualityInput } from './deal-business-details-object-equality.input';
import { DealBusinessDetailsWhereInput } from '../deal-business-details/deal-business-details-where.input';

@InputType()
export class DealBusinessDetailsCompositeFilter {

    @Field(() => DealBusinessDetailsObjectEqualityInput, {nullable:true})
    equals?: DealBusinessDetailsObjectEqualityInput;

    @Field(() => DealBusinessDetailsWhereInput, {nullable:true})
    is?: DealBusinessDetailsWhereInput;

    @Field(() => DealBusinessDetailsWhereInput, {nullable:true})
    isNot?: DealBusinessDetailsWhereInput;
}
