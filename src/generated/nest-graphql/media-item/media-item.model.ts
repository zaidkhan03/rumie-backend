import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MediaType } from '../prisma/media-type.enum';

@ObjectType()
export class MediaItem {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;

    @Field(() => Boolean, {nullable:false})
    thumb!: boolean;
}
