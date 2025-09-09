import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DealMeetupPreference {

    @Field(() => String, {nullable:false})
    days!: string;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => String, {nullable:false})
    location!: string;
}
