import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InfoSystemMessageObjectEqualityInput } from './info-system-message-object-equality.input';
import { InfoSystemMessageWhereInput } from '../info-system-message/info-system-message-where.input';

@InputType()
export class InfoSystemMessageCompositeFilter {

    @Field(() => InfoSystemMessageObjectEqualityInput, {nullable:true})
    equals?: InfoSystemMessageObjectEqualityInput;

    @Field(() => InfoSystemMessageWhereInput, {nullable:true})
    is?: InfoSystemMessageWhereInput;

    @Field(() => InfoSystemMessageWhereInput, {nullable:true})
    isNot?: InfoSystemMessageWhereInput;
}
