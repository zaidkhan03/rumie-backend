import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DealBusinessDetailsWhereInput {

    @Field(() => [DealBusinessDetailsWhereInput], {nullable:true})
    AND?: Array<DealBusinessDetailsWhereInput>;

    @Field(() => [DealBusinessDetailsWhereInput], {nullable:true})
    OR?: Array<DealBusinessDetailsWhereInput>;

    @Field(() => [DealBusinessDetailsWhereInput], {nullable:true})
    NOT?: Array<DealBusinessDetailsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    logo?: StringFilter;
}
