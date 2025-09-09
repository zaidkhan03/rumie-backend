import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGenderFilter } from '../prisma/user-gender-filter.enum';
import { UserListedFilter } from '../prisma/user-listed-filter.enum';
import { BooleanChoice } from '../prisma/boolean-choice.enum';

@InputType()
export class PushNotificationCampaignFiltersObjectEqualityInput {

    @Field(() => UserGenderFilter, {nullable:false})
    userGender!: `${UserGenderFilter}`;

    @Field(() => UserListedFilter, {nullable:true})
    userListed?: `${UserListedFilter}`;

    @Field(() => BooleanChoice, {nullable:true})
    userRentedEver?: `${BooleanChoice}`;

    @Field(() => BooleanChoice, {nullable:true})
    userBoughtEver?: `${BooleanChoice}`;
}
