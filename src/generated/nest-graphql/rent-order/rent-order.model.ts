import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RentOrder {

    @Field(() => String, {nullable:true})
    startDate!: string | null;

    @Field(() => String, {nullable:true})
    endDate!: string | null;

    @Field(() => [String], {nullable:true})
    initialImages!: Array<string>;

    @Field(() => [String], {nullable:true})
    completionImages!: Array<string>;
}
