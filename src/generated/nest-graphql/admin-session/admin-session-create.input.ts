import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdminSessionCreateInput {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Boolean, {nullable:true})
    valid?: boolean;

    @Field(() => Date, {nullable:true})
    started?: Date | string;

    @Field(() => Date, {nullable:true})
    lastSeen?: Date | string;
}
