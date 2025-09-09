import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalOrderHandedOverMessageObjectEqualityInput } from './local-order-handed-over-message-object-equality.input';
import { LocalOrderHandedOverMessageWhereInput } from '../local-order-handed-over-message/local-order-handed-over-message-where.input';

@InputType()
export class LocalOrderHandedOverMessageCompositeFilter {

    @Field(() => LocalOrderHandedOverMessageObjectEqualityInput, {nullable:true})
    equals?: LocalOrderHandedOverMessageObjectEqualityInput;

    @Field(() => LocalOrderHandedOverMessageWhereInput, {nullable:true})
    is?: LocalOrderHandedOverMessageWhereInput;

    @Field(() => LocalOrderHandedOverMessageWhereInput, {nullable:true})
    isNot?: LocalOrderHandedOverMessageWhereInput;
}
