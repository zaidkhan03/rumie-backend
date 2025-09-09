import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumMediaTypeFilter } from '../prisma/enum-media-type-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class MediaItemWhereInput {

    @Field(() => [MediaItemWhereInput], {nullable:true})
    AND?: Array<MediaItemWhereInput>;

    @Field(() => [MediaItemWhereInput], {nullable:true})
    OR?: Array<MediaItemWhereInput>;

    @Field(() => [MediaItemWhereInput], {nullable:true})
    NOT?: Array<MediaItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumMediaTypeFilter, {nullable:true})
    type?: EnumMediaTypeFilter;

    @Field(() => BoolFilter, {nullable:true})
    thumb?: BoolFilter;
}
