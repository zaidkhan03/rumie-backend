import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannedWordScalarWhereInput } from './banned-word-scalar-where.input';
import { Type } from 'class-transformer';
import { BannedWordUpdateManyMutationInput } from './banned-word-update-many-mutation.input';

@InputType()
export class BannedWordUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => BannedWordScalarWhereInput, {nullable:false})
    @Type(() => BannedWordScalarWhereInput)
    where!: BannedWordScalarWhereInput;

    @Field(() => BannedWordUpdateManyMutationInput, {nullable:false})
    @Type(() => BannedWordUpdateManyMutationInput)
    data!: BannedWordUpdateManyMutationInput;
}
