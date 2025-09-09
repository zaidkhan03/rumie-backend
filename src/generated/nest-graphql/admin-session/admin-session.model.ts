import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AdminSession {

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    valid!: boolean;

    @Field(() => Date, {nullable:false})
    started!: Date;

    @Field(() => Date, {nullable:false})
    lastSeen!: Date;
}
