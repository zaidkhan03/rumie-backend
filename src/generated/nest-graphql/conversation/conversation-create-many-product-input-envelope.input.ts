import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConversationCreateManyProductInput } from './conversation-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ConversationCreateManyProductInputEnvelope {

    @Field(() => [ConversationCreateManyProductInput], {nullable:false})
    @Type(() => ConversationCreateManyProductInput)
    data!: Array<ConversationCreateManyProductInput>;
}
