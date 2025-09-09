import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatMessagePayloadWhereInput } from './campus-chat-message-payload-where.input';
import { TextCampusChatPayloadCompositeFilter } from '../prisma/text-campus-chat-payload-composite-filter.input';
import { ProductShareCampusChatPayloadCompositeFilter } from '../prisma/product-share-campus-chat-payload-composite-filter.input';

@InputType()
export class CampusChatMessagePayloadWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CampusChatMessagePayloadWhereInput], {nullable:true})
    AND?: Array<CampusChatMessagePayloadWhereInput>;

    @Field(() => [CampusChatMessagePayloadWhereInput], {nullable:true})
    OR?: Array<CampusChatMessagePayloadWhereInput>;

    @Field(() => [CampusChatMessagePayloadWhereInput], {nullable:true})
    NOT?: Array<CampusChatMessagePayloadWhereInput>;

    @Field(() => TextCampusChatPayloadCompositeFilter, {nullable:true})
    text?: TextCampusChatPayloadCompositeFilter;

    @Field(() => ProductShareCampusChatPayloadCompositeFilter, {nullable:true})
    productShare?: ProductShareCampusChatPayloadCompositeFilter;
}
