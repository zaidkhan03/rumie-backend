import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteCreateWithoutCampusChatsInput } from './edu-institute-create-without-campus-chats.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateOrConnectWithoutCampusChatsInput } from './edu-institute-create-or-connect-without-campus-chats.input';
import { EduInstituteUpsertWithoutCampusChatsInput } from './edu-institute-upsert-without-campus-chats.input';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';
import { EduInstituteUpdateToOneWithWhereWithoutCampusChatsInput } from './edu-institute-update-to-one-with-where-without-campus-chats.input';

@InputType()
export class EduInstituteUpdateOneRequiredWithoutCampusChatsNestedInput {

    @Field(() => EduInstituteCreateWithoutCampusChatsInput, {nullable:true})
    @Type(() => EduInstituteCreateWithoutCampusChatsInput)
    create?: EduInstituteCreateWithoutCampusChatsInput;

    @Field(() => EduInstituteCreateOrConnectWithoutCampusChatsInput, {nullable:true})
    @Type(() => EduInstituteCreateOrConnectWithoutCampusChatsInput)
    connectOrCreate?: EduInstituteCreateOrConnectWithoutCampusChatsInput;

    @Field(() => EduInstituteUpsertWithoutCampusChatsInput, {nullable:true})
    @Type(() => EduInstituteUpsertWithoutCampusChatsInput)
    upsert?: EduInstituteUpsertWithoutCampusChatsInput;

    @Field(() => EduInstituteWhereUniqueInput, {nullable:true})
    @Type(() => EduInstituteWhereUniqueInput)
    connect?: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;

    @Field(() => EduInstituteUpdateToOneWithWhereWithoutCampusChatsInput, {nullable:true})
    @Type(() => EduInstituteUpdateToOneWithWhereWithoutCampusChatsInput)
    update?: EduInstituteUpdateToOneWithWhereWithoutCampusChatsInput;
}
