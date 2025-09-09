import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserGenderFilter } from '../prisma/user-gender-filter.enum';
import { UserListedFilter } from '../prisma/user-listed-filter.enum';
import { BooleanChoice } from '../prisma/boolean-choice.enum';

@ObjectType()
export class PushNotificationCampaignFilters {

    @Field(() => UserGenderFilter, {nullable:false})
    userGender!: `${UserGenderFilter}`;

    @Field(() => UserListedFilter, {nullable:true})
    userListed!: `${UserListedFilter}` | null;

    @Field(() => BooleanChoice, {nullable:true})
    userRentedEver!: `${BooleanChoice}` | null;

    @Field(() => BooleanChoice, {nullable:true})
    userBoughtEver!: `${BooleanChoice}` | null;
}
