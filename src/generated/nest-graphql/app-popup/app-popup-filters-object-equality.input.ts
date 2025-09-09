import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGenderFilter } from '../prisma/user-gender-filter.enum';

@InputType()
export class AppPopupFiltersObjectEqualityInput {

    @Field(() => UserGenderFilter, {nullable:false})
    userGender!: `${UserGenderFilter}`;
}
