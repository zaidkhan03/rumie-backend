import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AdvertiserPOC {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:false})
    email!: string;
}
