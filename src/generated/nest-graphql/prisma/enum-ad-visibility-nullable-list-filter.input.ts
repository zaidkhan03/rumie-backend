import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdVisibility } from './ad-visibility.enum';

@InputType()
export class EnumAdVisibilityNullableListFilter {

    @Field(() => [AdVisibility], {nullable:true})
    equals?: Array<`${AdVisibility}`>;

    @Field(() => AdVisibility, {nullable:true})
    has?: `${AdVisibility}`;

    @Field(() => [AdVisibility], {nullable:true})
    hasEvery?: Array<`${AdVisibility}`>;

    @Field(() => [AdVisibility], {nullable:true})
    hasSome?: Array<`${AdVisibility}`>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
