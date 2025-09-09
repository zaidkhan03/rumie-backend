import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannedWordCreateManyCategoryInput } from './banned-word-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class BannedWordCreateManyCategoryInputEnvelope {

    @Field(() => [BannedWordCreateManyCategoryInput], {nullable:false})
    @Type(() => BannedWordCreateManyCategoryInput)
    data!: Array<BannedWordCreateManyCategoryInput>;
}
