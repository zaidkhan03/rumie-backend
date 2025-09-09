import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductShareCampusChatPayloadObjectEqualityInput } from './product-share-campus-chat-payload-object-equality.input';
import { ProductShareCampusChatPayloadWhereInput } from '../product-share-campus-chat-payload/product-share-campus-chat-payload-where.input';

@InputType()
export class ProductShareCampusChatPayloadCompositeFilter {

    @Field(() => ProductShareCampusChatPayloadObjectEqualityInput, {nullable:true})
    equals?: ProductShareCampusChatPayloadObjectEqualityInput;

    @Field(() => ProductShareCampusChatPayloadWhereInput, {nullable:true})
    is?: ProductShareCampusChatPayloadWhereInput;

    @Field(() => ProductShareCampusChatPayloadWhereInput, {nullable:true})
    isNot?: ProductShareCampusChatPayloadWhereInput;
}
