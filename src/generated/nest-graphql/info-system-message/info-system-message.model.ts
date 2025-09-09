import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SystemIcons } from '../prisma/system-icons.enum';

@ObjectType()
export class InfoSystemMessage {

    @Field(() => SystemIcons, {nullable:false})
    icon!: `${SystemIcons}`;

    @Field(() => String, {nullable:false})
    text1!: string;

    @Field(() => String, {nullable:false})
    text2!: string;
}
