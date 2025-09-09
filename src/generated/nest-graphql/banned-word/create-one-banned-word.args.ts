import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordCreateInput } from './banned-word-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBannedWordArgs {

    @Field(() => BannedWordCreateInput, {nullable:false})
    @Type(() => BannedWordCreateInput)
    data!: BannedWordCreateInput;
}
