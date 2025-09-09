import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaItemCreateInput } from './media-item-create.input';
import { Type } from 'class-transformer';
import { MediaItemUpdateInput } from './media-item-update.input';

@InputType()
export class MediaItemUpdateEnvelopeInput {

    @Field(() => MediaItemCreateInput, {nullable:true})
    @Type(() => MediaItemCreateInput)
    set?: MediaItemCreateInput;

    @Field(() => MediaItemUpdateInput, {nullable:true})
    @Type(() => MediaItemUpdateInput)
    update?: MediaItemUpdateInput;
}
