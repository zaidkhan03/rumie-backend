import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TextCampusChatPayloadObjectEqualityInput } from './text-campus-chat-payload-object-equality.input';
import { TextCampusChatPayloadWhereInput } from '../text-campus-chat-payload/text-campus-chat-payload-where.input';

@InputType()
export class TextCampusChatPayloadCompositeFilter {

    @Field(() => TextCampusChatPayloadObjectEqualityInput, {nullable:true})
    equals?: TextCampusChatPayloadObjectEqualityInput;

    @Field(() => TextCampusChatPayloadWhereInput, {nullable:true})
    is?: TextCampusChatPayloadWhereInput;

    @Field(() => TextCampusChatPayloadWhereInput, {nullable:true})
    isNot?: TextCampusChatPayloadWhereInput;
}
