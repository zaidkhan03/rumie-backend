import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaType } from './media-type.enum';

@InputType()
export class MediaItemObjectEqualityInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => MediaType, {nullable:false})
    type!: `${MediaType}`;

    @Field(() => Boolean, {nullable:false})
    thumb!: boolean;
}
