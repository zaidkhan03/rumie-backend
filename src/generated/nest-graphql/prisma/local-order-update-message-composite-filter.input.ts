import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalOrderUpdateMessageObjectEqualityInput } from './local-order-update-message-object-equality.input';
import { LocalOrderUpdateMessageWhereInput } from '../local-order-update-message/local-order-update-message-where.input';

@InputType()
export class LocalOrderUpdateMessageCompositeFilter {

    @Field(() => LocalOrderUpdateMessageObjectEqualityInput, {nullable:true})
    equals?: LocalOrderUpdateMessageObjectEqualityInput;

    @Field(() => LocalOrderUpdateMessageWhereInput, {nullable:true})
    is?: LocalOrderUpdateMessageWhereInput;

    @Field(() => LocalOrderUpdateMessageWhereInput, {nullable:true})
    isNot?: LocalOrderUpdateMessageWhereInput;
}
