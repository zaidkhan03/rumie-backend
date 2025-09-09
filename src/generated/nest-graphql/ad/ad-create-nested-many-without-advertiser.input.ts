import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutAdvertiserInput } from './ad-create-without-advertiser.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutAdvertiserInput } from './ad-create-or-connect-without-advertiser.input';
import { AdCreateManyAdvertiserInputEnvelope } from './ad-create-many-advertiser-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AdWhereUniqueInput } from './ad-where-unique.input';

@InputType()
export class AdCreateNestedManyWithoutAdvertiserInput {

    @Field(() => [AdCreateWithoutAdvertiserInput], {nullable:true})
    @Type(() => AdCreateWithoutAdvertiserInput)
    create?: Array<AdCreateWithoutAdvertiserInput>;

    @Field(() => [AdCreateOrConnectWithoutAdvertiserInput], {nullable:true})
    @Type(() => AdCreateOrConnectWithoutAdvertiserInput)
    connectOrCreate?: Array<AdCreateOrConnectWithoutAdvertiserInput>;

    @Field(() => AdCreateManyAdvertiserInputEnvelope, {nullable:true})
    @Type(() => AdCreateManyAdvertiserInputEnvelope)
    createMany?: AdCreateManyAdvertiserInputEnvelope;

    @Field(() => [AdWhereUniqueInput], {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AdWhereUniqueInput, 'id'>>;
}
