import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserGenderFilter } from '../prisma/user-gender-filter.enum';

@ObjectType()
export class AppPopupFilters {

    @Field(() => UserGenderFilter, {nullable:false})
    userGender!: `${UserGenderFilter}`;
}
