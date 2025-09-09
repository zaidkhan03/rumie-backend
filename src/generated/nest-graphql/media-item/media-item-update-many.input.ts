import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaItemWhereInput } from './media-item-where.input';
import { Type } from 'class-transformer';
import { MediaItemUpdateInput } from './media-item-update.input';

@InputType()
export class MediaItemUpdateManyInput {

    @Field(() => MediaItemWhereInput, {nullable:false})
    @Type(() => MediaItemWhereInput)
    where!: MediaItemWhereInput;

    @Field(() => MediaItemUpdateInput, {nullable:false})
    @Type(() => MediaItemUpdateInput)
    data!: MediaItemUpdateInput;
}
