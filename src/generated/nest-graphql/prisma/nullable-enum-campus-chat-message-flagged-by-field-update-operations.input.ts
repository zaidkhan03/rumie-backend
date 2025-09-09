import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatMessageFlaggedBy } from './campus-chat-message-flagged-by.enum';

@InputType()
export class NullableEnumCampusChatMessageFlaggedByFieldUpdateOperationsInput {

    @Field(() => CampusChatMessageFlaggedBy, {nullable:true})
    set?: `${CampusChatMessageFlaggedBy}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
