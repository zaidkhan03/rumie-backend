import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportMessageObjectEqualityInput } from './support-message-object-equality.input';
import { SupportMessageWhereInput } from '../support-message/support-message-where.input';

@InputType()
export class SupportMessageCompositeListFilter {

    @Field(() => [SupportMessageObjectEqualityInput], {nullable:true})
    equals?: Array<SupportMessageObjectEqualityInput>;

    @Field(() => SupportMessageWhereInput, {nullable:true})
    every?: SupportMessageWhereInput;

    @Field(() => SupportMessageWhereInput, {nullable:true})
    some?: SupportMessageWhereInput;

    @Field(() => SupportMessageWhereInput, {nullable:true})
    none?: SupportMessageWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
