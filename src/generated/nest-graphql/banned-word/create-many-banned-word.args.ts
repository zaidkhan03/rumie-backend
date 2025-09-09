import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannedWordCreateManyInput } from './banned-word-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBannedWordArgs {

    @Field(() => [BannedWordCreateManyInput], {nullable:false})
    @Type(() => BannedWordCreateManyInput)
    data!: Array<BannedWordCreateManyInput>;
}
