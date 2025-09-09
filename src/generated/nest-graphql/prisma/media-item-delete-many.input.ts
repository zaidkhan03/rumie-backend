import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaItemWhereInput } from '../media-item/media-item-where.input';
import { Type } from 'class-transformer';

@InputType()
export class MediaItemDeleteManyInput {

    @Field(() => MediaItemWhereInput, {nullable:false})
    @Type(() => MediaItemWhereInput)
    where!: MediaItemWhereInput;
}
