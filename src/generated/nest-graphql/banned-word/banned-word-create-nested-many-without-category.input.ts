import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannedWordCreateWithoutCategoryInput } from './banned-word-create-without-category.input';
import { Type } from 'class-transformer';
import { BannedWordCreateOrConnectWithoutCategoryInput } from './banned-word-create-or-connect-without-category.input';
import { BannedWordCreateManyCategoryInputEnvelope } from './banned-word-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BannedWordWhereUniqueInput } from './banned-word-where-unique.input';

@InputType()
export class BannedWordCreateNestedManyWithoutCategoryInput {

    @Field(() => [BannedWordCreateWithoutCategoryInput], {nullable:true})
    @Type(() => BannedWordCreateWithoutCategoryInput)
    create?: Array<BannedWordCreateWithoutCategoryInput>;

    @Field(() => [BannedWordCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => BannedWordCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<BannedWordCreateOrConnectWithoutCategoryInput>;

    @Field(() => BannedWordCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => BannedWordCreateManyCategoryInputEnvelope)
    createMany?: BannedWordCreateManyCategoryInputEnvelope;

    @Field(() => [BannedWordWhereUniqueInput], {nullable:true})
    @Type(() => BannedWordWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BannedWordWhereUniqueInput, 'id' | 'word'>>;
}
