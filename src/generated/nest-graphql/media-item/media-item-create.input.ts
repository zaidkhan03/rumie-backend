import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaType } from '../prisma/media-type.enum';

@InputType()
export class MediaItemCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;

    @Field(() => Boolean, {nullable:false})
    thumb!: boolean;
}
