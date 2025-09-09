import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordUpdateManyMutationInput } from './banned-word-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BannedWordWhereInput } from './banned-word-where.input';

@ArgsType()
export class UpdateManyBannedWordArgs {

    @Field(() => BannedWordUpdateManyMutationInput, {nullable:false})
    @Type(() => BannedWordUpdateManyMutationInput)
    data!: BannedWordUpdateManyMutationInput;

    @Field(() => BannedWordWhereInput, {nullable:true})
    @Type(() => BannedWordWhereInput)
    where?: BannedWordWhereInput;
}
