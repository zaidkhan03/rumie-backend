import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaItemCreateInput } from '../media-item/media-item-create.input';
import { Type } from 'class-transformer';
import { MediaItemUpdateManyInput } from '../media-item/media-item-update-many.input';
import { MediaItemDeleteManyInput } from './media-item-delete-many.input';

@InputType()
export class MediaItemListUpdateEnvelopeInput {

    @Field(() => [MediaItemCreateInput], {nullable:true})
    @Type(() => MediaItemCreateInput)
    set?: Array<MediaItemCreateInput>;

    @Field(() => [MediaItemCreateInput], {nullable:true})
    push?: Array<MediaItemCreateInput>;

    @Field(() => MediaItemUpdateManyInput, {nullable:true})
    @Type(() => MediaItemUpdateManyInput)
    updateMany?: MediaItemUpdateManyInput;

    @Field(() => MediaItemDeleteManyInput, {nullable:true})
    @Type(() => MediaItemDeleteManyInput)
    deleteMany?: MediaItemDeleteManyInput;
}
