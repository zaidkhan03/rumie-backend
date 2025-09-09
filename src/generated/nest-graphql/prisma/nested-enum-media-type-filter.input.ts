import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaType } from './media-type.enum';

@InputType()
export class NestedEnumMediaTypeFilter {

    @Field(() => MediaType, {nullable:true})
    equals?: `${MediaType}`;

    @Field(() => [MediaType], {nullable:true})
    in?: Array<`${MediaType}`>;

    @Field(() => [MediaType], {nullable:true})
    notIn?: Array<`${MediaType}`>;

    @Field(() => NestedEnumMediaTypeFilter, {nullable:true})
    not?: NestedEnumMediaTypeFilter;
}
