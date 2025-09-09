import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NameAndImageWhereInput } from '../name-and-image/name-and-image-where.input';
import { Type } from 'class-transformer';

@InputType()
export class NameAndImageDeleteManyInput {

    @Field(() => NameAndImageWhereInput, {nullable:false})
    @Type(() => NameAndImageWhereInput)
    where!: NameAndImageWhereInput;
}
