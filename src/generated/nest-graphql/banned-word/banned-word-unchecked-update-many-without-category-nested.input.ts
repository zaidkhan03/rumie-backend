import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannedWordCreateWithoutCategoryInput } from './banned-word-create-without-category.input';
import { Type } from 'class-transformer';
import { BannedWordCreateOrConnectWithoutCategoryInput } from './banned-word-create-or-connect-without-category.input';
import { BannedWordUpsertWithWhereUniqueWithoutCategoryInput } from './banned-word-upsert-with-where-unique-without-category.input';
import { BannedWordCreateManyCategoryInputEnvelope } from './banned-word-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BannedWordWhereUniqueInput } from './banned-word-where-unique.input';
import { BannedWordUpdateWithWhereUniqueWithoutCategoryInput } from './banned-word-update-with-where-unique-without-category.input';
import { BannedWordUpdateManyWithWhereWithoutCategoryInput } from './banned-word-update-many-with-where-without-category.input';
import { BannedWordScalarWhereInput } from './banned-word-scalar-where.input';

@InputType()
export class BannedWordUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [BannedWordCreateWithoutCategoryInput], {nullable:true})
    @Type(() => BannedWordCreateWithoutCategoryInput)
    create?: Array<BannedWordCreateWithoutCategoryInput>;

    @Field(() => [BannedWordCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => BannedWordCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<BannedWordCreateOrConnectWithoutCategoryInput>;

    @Field(() => [BannedWordUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => BannedWordUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<BannedWordUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => BannedWordCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => BannedWordCreateManyCategoryInputEnvelope)
    createMany?: BannedWordCreateManyCategoryInputEnvelope;

    @Field(() => [BannedWordWhereUniqueInput], {nullable:true})
    @Type(() => BannedWordWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BannedWordWhereUniqueInput, 'id' | 'word'>>;

    @Field(() => [BannedWordWhereUniqueInput], {nullable:true})
    @Type(() => BannedWordWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BannedWordWhereUniqueInput, 'id' | 'word'>>;

    @Field(() => [BannedWordWhereUniqueInput], {nullable:true})
    @Type(() => BannedWordWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BannedWordWhereUniqueInput, 'id' | 'word'>>;

    @Field(() => [BannedWordWhereUniqueInput], {nullable:true})
    @Type(() => BannedWordWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BannedWordWhereUniqueInput, 'id' | 'word'>>;

    @Field(() => [BannedWordUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => BannedWordUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<BannedWordUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [BannedWordUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => BannedWordUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<BannedWordUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [BannedWordScalarWhereInput], {nullable:true})
    @Type(() => BannedWordScalarWhereInput)
    deleteMany?: Array<BannedWordScalarWhereInput>;
}
