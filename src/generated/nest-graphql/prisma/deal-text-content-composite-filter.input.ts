import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DealTextContentObjectEqualityInput } from './deal-text-content-object-equality.input';
import { DealTextContentWhereInput } from '../deal-text-content/deal-text-content-where.input';

@InputType()
export class DealTextContentCompositeFilter {

    @Field(() => DealTextContentObjectEqualityInput, {nullable:true})
    equals?: DealTextContentObjectEqualityInput;

    @Field(() => DealTextContentWhereInput, {nullable:true})
    is?: DealTextContentWhereInput;

    @Field(() => DealTextContentWhereInput, {nullable:true})
    isNot?: DealTextContentWhereInput;
}
