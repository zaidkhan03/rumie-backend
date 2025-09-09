import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutAdvertiserInput } from './ad-create-without-advertiser.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutAdvertiserInput } from './ad-create-or-connect-without-advertiser.input';
import { AdUpsertWithWhereUniqueWithoutAdvertiserInput } from './ad-upsert-with-where-unique-without-advertiser.input';
import { AdCreateManyAdvertiserInputEnvelope } from './ad-create-many-advertiser-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { AdUpdateWithWhereUniqueWithoutAdvertiserInput } from './ad-update-with-where-unique-without-advertiser.input';
import { AdUpdateManyWithWhereWithoutAdvertiserInput } from './ad-update-many-with-where-without-advertiser.input';
import { AdScalarWhereInput } from './ad-scalar-where.input';

@InputType()
export class AdUpdateManyWithoutAdvertiserNestedInput {

    @Field(() => [AdCreateWithoutAdvertiserInput], {nullable:true})
    @Type(() => AdCreateWithoutAdvertiserInput)
    create?: Array<AdCreateWithoutAdvertiserInput>;

    @Field(() => [AdCreateOrConnectWithoutAdvertiserInput], {nullable:true})
    @Type(() => AdCreateOrConnectWithoutAdvertiserInput)
    connectOrCreate?: Array<AdCreateOrConnectWithoutAdvertiserInput>;

    @Field(() => [AdUpsertWithWhereUniqueWithoutAdvertiserInput], {nullable:true})
    @Type(() => AdUpsertWithWhereUniqueWithoutAdvertiserInput)
    upsert?: Array<AdUpsertWithWhereUniqueWithoutAdvertiserInput>;

    @Field(() => AdCreateManyAdvertiserInputEnvelope, {nullable:true})
    @Type(() => AdCreateManyAdvertiserInputEnvelope)
    createMany?: AdCreateManyAdvertiserInputEnvelope;

    @Field(() => [AdWhereUniqueInput], {nullable:true})
    @Type(() => AdWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AdWhereUniqueInput, 'id'>>;

    @Field(() => [AdWhereUniqueInput], {nullable:true})
    @Type(() => AdWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AdWhereUniqueInput, 'id'>>;

    @Field(() => [AdWhereUniqueInput], {nullable:true})
    @Type(() => AdWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AdWhereUniqueInput, 'id'>>;

    @Field(() => [AdWhereUniqueInput], {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AdWhereUniqueInput, 'id'>>;

    @Field(() => [AdUpdateWithWhereUniqueWithoutAdvertiserInput], {nullable:true})
    @Type(() => AdUpdateWithWhereUniqueWithoutAdvertiserInput)
    update?: Array<AdUpdateWithWhereUniqueWithoutAdvertiserInput>;

    @Field(() => [AdUpdateManyWithWhereWithoutAdvertiserInput], {nullable:true})
    @Type(() => AdUpdateManyWithWhereWithoutAdvertiserInput)
    updateMany?: Array<AdUpdateManyWithWhereWithoutAdvertiserInput>;

    @Field(() => [AdScalarWhereInput], {nullable:true})
    @Type(() => AdScalarWhereInput)
    deleteMany?: Array<AdScalarWhereInput>;
}
