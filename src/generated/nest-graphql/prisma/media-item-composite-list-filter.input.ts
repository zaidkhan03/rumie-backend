import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaItemObjectEqualityInput } from './media-item-object-equality.input';
import { MediaItemWhereInput } from '../media-item/media-item-where.input';

@InputType()
export class MediaItemCompositeListFilter {

    @Field(() => [MediaItemObjectEqualityInput], {nullable:true})
    equals?: Array<MediaItemObjectEqualityInput>;

    @Field(() => MediaItemWhereInput, {nullable:true})
    every?: MediaItemWhereInput;

    @Field(() => MediaItemWhereInput, {nullable:true})
    some?: MediaItemWhereInput;

    @Field(() => MediaItemWhereInput, {nullable:true})
    none?: MediaItemWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
