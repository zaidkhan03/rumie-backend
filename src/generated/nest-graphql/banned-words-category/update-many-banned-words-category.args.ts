import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordsCategoryUpdateManyMutationInput } from './banned-words-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BannedWordsCategoryWhereInput } from './banned-words-category-where.input';

@ArgsType()
export class UpdateManyBannedWordsCategoryArgs {

    @Field(() => BannedWordsCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => BannedWordsCategoryUpdateManyMutationInput)
    data!: BannedWordsCategoryUpdateManyMutationInput;

    @Field(() => BannedWordsCategoryWhereInput, {nullable:true})
    @Type(() => BannedWordsCategoryWhereInput)
    where?: BannedWordsCategoryWhereInput;
}
