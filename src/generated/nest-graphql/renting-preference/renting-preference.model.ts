import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Availability } from '../prisma/availability.enum';

@ObjectType()
export class RentingPreference {

    @Field(() => String, {defaultValue:'',nullable:true})
    addressId!: string | null;

    @Field(() => [Availability], {nullable:true})
    availability!: Array<`${Availability}`>;

    @Field(() => String, {defaultValue:'',nullable:true})
    addressDescription!: string | null;
}
