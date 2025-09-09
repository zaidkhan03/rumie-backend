import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductShareCampusChatPayloadCreateInput } from './product-share-campus-chat-payload-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductShareCampusChatPayloadCreateEnvelopeInput {

    @Field(() => ProductShareCampusChatPayloadCreateInput, {nullable:true})
    @Type(() => ProductShareCampusChatPayloadCreateInput)
    set?: ProductShareCampusChatPayloadCreateInput;
}
