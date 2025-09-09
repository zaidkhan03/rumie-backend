import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColorWhereInput } from './color-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyColorArgs {

    @Field(() => ColorWhereInput, {nullable:true})
    @Type(() => ColorWhereInput)
    where?: ColorWhereInput;
}
