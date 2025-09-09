import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EduInstituteCreateWithoutCampusChatsInput } from './edu-institute-create-without-campus-chats.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateOrConnectWithoutCampusChatsInput } from './edu-institute-create-or-connect-without-campus-chats.input';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';

@InputType()
export class EduInstituteCreateNestedOneWithoutCampusChatsInput {

    @Field(() => EduInstituteCreateWithoutCampusChatsInput, {nullable:true})
    @Type(() => EduInstituteCreateWithoutCampusChatsInput)
    create?: EduInstituteCreateWithoutCampusChatsInput;

    @Field(() => EduInstituteCreateOrConnectWithoutCampusChatsInput, {nullable:true})
    @Type(() => EduInstituteCreateOrConnectWithoutCampusChatsInput)
    connectOrCreate?: EduInstituteCreateOrConnectWithoutCampusChatsInput;

    @Field(() => EduInstituteWhereUniqueInput, {nullable:true})
    @Type(() => EduInstituteWhereUniqueInput)
    connect?: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;
}
