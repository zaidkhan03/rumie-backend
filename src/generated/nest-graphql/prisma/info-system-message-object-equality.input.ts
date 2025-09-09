import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemIcons } from './system-icons.enum';

@InputType()
export class InfoSystemMessageObjectEqualityInput {

    @Field(() => SystemIcons, {nullable:false})
    icon!: `${SystemIcons}`;

    @Field(() => String, {nullable:false})
    text1!: string;

    @Field(() => String, {nullable:false})
    text2!: string;
}
