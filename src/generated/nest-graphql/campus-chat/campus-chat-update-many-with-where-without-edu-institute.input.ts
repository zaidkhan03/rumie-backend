import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CampusChatScalarWhereInput } from './campus-chat-scalar-where.input';
import { Type } from 'class-transformer';
import { CampusChatUpdateManyMutationInput } from './campus-chat-update-many-mutation.input';

@InputType()
export class CampusChatUpdateManyWithWhereWithoutEduInstituteInput {

    @Field(() => CampusChatScalarWhereInput, {nullable:false})
    @Type(() => CampusChatScalarWhereInput)
    where!: CampusChatScalarWhereInput;

    @Field(() => CampusChatUpdateManyMutationInput, {nullable:false})
    @Type(() => CampusChatUpdateManyMutationInput)
    data!: CampusChatUpdateManyMutationInput;
}
