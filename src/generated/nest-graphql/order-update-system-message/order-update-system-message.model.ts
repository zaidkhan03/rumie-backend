import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SystemIcons } from '../prisma/system-icons.enum';

@ObjectType()
export class OrderUpdateSystemMessage {

    @Field(() => SystemIcons, {nullable:false})
    icon1!: `${SystemIcons}`;

    @Field(() => SystemIcons, {nullable:false})
    icon2!: `${SystemIcons}`;

    @Field(() => SystemIcons, {nullable:false})
    icon3!: `${SystemIcons}`;

    @Field(() => String, {nullable:false})
    text1!: string;

    @Field(() => String, {nullable:false})
    text2!: string;

    @Field(() => String, {nullable:false})
    text3!: string;

    @Field(() => String, {nullable:false})
    trackingNumber!: string;
}
