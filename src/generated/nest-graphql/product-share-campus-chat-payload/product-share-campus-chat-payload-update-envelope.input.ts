import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductShareCampusChatPayloadCreateInput } from './product-share-campus-chat-payload-create.input';
import { Type } from 'class-transformer';
import { ProductShareCampusChatPayloadUpdateInput } from './product-share-campus-chat-payload-update.input';

@InputType()
export class ProductShareCampusChatPayloadUpdateEnvelopeInput {

    @Field(() => ProductShareCampusChatPayloadCreateInput, {nullable:true})
    @Type(() => ProductShareCampusChatPayloadCreateInput)
    set?: ProductShareCampusChatPayloadCreateInput;

    @Field(() => ProductShareCampusChatPayloadUpdateInput, {nullable:true})
    @Type(() => ProductShareCampusChatPayloadUpdateInput)
    update?: ProductShareCampusChatPayloadUpdateInput;
}
