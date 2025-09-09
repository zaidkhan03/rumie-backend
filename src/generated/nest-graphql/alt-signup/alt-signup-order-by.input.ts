import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AltSignupOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    idProof?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    uploadedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tempEmailAllotted?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    emailClaimed?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    remarks?: `${SortOrder}`;
}
