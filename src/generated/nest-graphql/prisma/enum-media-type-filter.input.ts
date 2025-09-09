import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaType } from './media-type.enum';
import { NestedEnumMediaTypeFilter } from './nested-enum-media-type-filter.input';

@InputType()
export class EnumMediaTypeFilter {

    @Field(() => MediaType, {nullable:true})
    equals?: `${MediaType}`;

    @Field(() => [MediaType], {nullable:true})
    in?: Array<`${MediaType}`>;

    @Field(() => [MediaType], {nullable:true})
    notIn?: Array<`${MediaType}`>;

    @Field(() => NestedEnumMediaTypeFilter, {nullable:true})
    not?: NestedEnumMediaTypeFilter;
}
