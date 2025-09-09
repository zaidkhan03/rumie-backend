import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TextCampusChatPayloadCreateInput } from './text-campus-chat-payload-create.input';
import { Type } from 'class-transformer';
import { TextCampusChatPayloadUpdateInput } from './text-campus-chat-payload-update.input';

@InputType()
export class TextCampusChatPayloadUpdateEnvelopeInput {

    @Field(() => TextCampusChatPayloadCreateInput, {nullable:true})
    @Type(() => TextCampusChatPayloadCreateInput)
    set?: TextCampusChatPayloadCreateInput;

    @Field(() => TextCampusChatPayloadUpdateInput, {nullable:true})
    @Type(() => TextCampusChatPayloadUpdateInput)
    update?: TextCampusChatPayloadUpdateInput;
}
