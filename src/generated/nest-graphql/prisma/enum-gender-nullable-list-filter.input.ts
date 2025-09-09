import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from './gender.enum';

@InputType()
export class EnumGenderNullableListFilter {

    @Field(() => [Gender], {nullable:true})
    equals?: Array<`${Gender}`>;

    @Field(() => Gender, {nullable:true})
    has?: `${Gender}`;

    @Field(() => [Gender], {nullable:true})
    hasEvery?: Array<`${Gender}`>;

    @Field(() => [Gender], {nullable:true})
    hasSome?: Array<`${Gender}`>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
