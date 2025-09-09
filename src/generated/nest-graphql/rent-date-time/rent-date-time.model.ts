import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RentDateTime {

    @Field(() => String, {nullable:false})
    date!: string;

    @Field(() => String, {nullable:false})
    time!: string;
}
