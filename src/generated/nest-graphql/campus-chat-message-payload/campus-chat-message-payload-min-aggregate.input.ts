import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CampusChatMessagePayloadMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
