import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Availability } from './availability.enum';

@InputType()
export class EnumAvailabilityNullableListFilter {

    @Field(() => [Availability], {nullable:true})
    equals?: Array<`${Availability}`>;

    @Field(() => Availability, {nullable:true})
    has?: `${Availability}`;

    @Field(() => [Availability], {nullable:true})
    hasEvery?: Array<`${Availability}`>;

    @Field(() => [Availability], {nullable:true})
    hasSome?: Array<`${Availability}`>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
