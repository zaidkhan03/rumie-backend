import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumUserGenderFilterFilter } from '../prisma/enum-user-gender-filter-filter.input';

@InputType()
export class AppPopupFiltersWhereInput {

    @Field(() => [AppPopupFiltersWhereInput], {nullable:true})
    AND?: Array<AppPopupFiltersWhereInput>;

    @Field(() => [AppPopupFiltersWhereInput], {nullable:true})
    OR?: Array<AppPopupFiltersWhereInput>;

    @Field(() => [AppPopupFiltersWhereInput], {nullable:true})
    NOT?: Array<AppPopupFiltersWhereInput>;

    @Field(() => EnumUserGenderFilterFilter, {nullable:true})
    userGender?: EnumUserGenderFilterFilter;
}
