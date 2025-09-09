import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NameAndImageWhereInput } from './name-and-image-where.input';
import { Type } from 'class-transformer';
import { NameAndImageUpdateInput } from './name-and-image-update.input';

@InputType()
export class NameAndImageUpdateManyInput {

    @Field(() => NameAndImageWhereInput, {nullable:false})
    @Type(() => NameAndImageWhereInput)
    where!: NameAndImageWhereInput;

    @Field(() => NameAndImageUpdateInput, {nullable:false})
    @Type(() => NameAndImageUpdateInput)
    data!: NameAndImageUpdateInput;
}
