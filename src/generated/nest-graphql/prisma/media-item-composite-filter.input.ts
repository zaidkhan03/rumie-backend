import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaItemObjectEqualityInput } from './media-item-object-equality.input';
import { MediaItemWhereInput } from '../media-item/media-item-where.input';

@InputType()
export class MediaItemCompositeFilter {

    @Field(() => MediaItemObjectEqualityInput, {nullable:true})
    equals?: MediaItemObjectEqualityInput;

    @Field(() => MediaItemWhereInput, {nullable:true})
    is?: MediaItemWhereInput;

    @Field(() => MediaItemWhereInput, {nullable:true})
    isNot?: MediaItemWhereInput;
}
