import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaItemCreateInput } from '../media-item/media-item-create.input';
import { Type } from 'class-transformer';

@InputType()
export class MediaItemListCreateEnvelopeInput {

    @Field(() => [MediaItemCreateInput], {nullable:true})
    @Type(() => MediaItemCreateInput)
    set?: Array<MediaItemCreateInput>;
}
