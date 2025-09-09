import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordWhereInput } from './banned-word-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBannedWordArgs {

    @Field(() => BannedWordWhereInput, {nullable:true})
    @Type(() => BannedWordWhereInput)
    where?: BannedWordWhereInput;
}
