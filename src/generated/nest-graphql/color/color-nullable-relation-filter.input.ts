import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColorWhereInput } from './color-where.input';

@InputType()
export class ColorNullableRelationFilter {

    @Field(() => ColorWhereInput, {nullable:true})
    is?: ColorWhereInput;

    @Field(() => ColorWhereInput, {nullable:true})
    isNot?: ColorWhereInput;
}
