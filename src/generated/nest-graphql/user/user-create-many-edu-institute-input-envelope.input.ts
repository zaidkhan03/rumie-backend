import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyEduInstituteInput } from './user-create-many-edu-institute.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyEduInstituteInputEnvelope {

    @Field(() => [UserCreateManyEduInstituteInput], {nullable:false})
    @Type(() => UserCreateManyEduInstituteInput)
    data!: Array<UserCreateManyEduInstituteInput>;
}
