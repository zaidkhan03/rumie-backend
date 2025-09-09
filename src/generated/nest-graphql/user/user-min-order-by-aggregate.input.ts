import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firstName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    lastName?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    countryCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    phoneNumberVerified?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    referrer?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gender?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    displayPicture?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    personalEmail?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    eduInstituteId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    about?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    legacyId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    blackListed?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    addedManually?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    registrationPlatform?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    instagramUsername?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    referralRockCode?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    deactivated?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    signupV?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isParent?: `${SortOrder}`;
}
