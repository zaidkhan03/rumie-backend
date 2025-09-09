import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EduInstituteWhereUniqueInput } from './edu-institute-where-unique.input';
import { Type } from 'class-transformer';
import { EduInstituteCreateWithoutCampusChatsInput } from './edu-institute-create-without-campus-chats.input';

@InputType()
export class EduInstituteCreateOrConnectWithoutCampusChatsInput {

    @Field(() => EduInstituteWhereUniqueInput, {nullable:false})
    @Type(() => EduInstituteWhereUniqueInput)
    where!: Prisma.AtLeast<EduInstituteWhereUniqueInput, 'id' | 'domain'>;

    @Field(() => EduInstituteCreateWithoutCampusChatsInput, {nullable:false})
    @Type(() => EduInstituteCreateWithoutCampusChatsInput)
    create!: EduInstituteCreateWithoutCampusChatsInput;
}
