import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TextCampusChatPayloadCreateInput } from './text-campus-chat-payload-create.input';
import { Type } from 'class-transformer';

@InputType()
export class TextCampusChatPayloadCreateEnvelopeInput {

    @Field(() => TextCampusChatPayloadCreateInput, {nullable:true})
    @Type(() => TextCampusChatPayloadCreateInput)
    set?: TextCampusChatPayloadCreateInput;
}
