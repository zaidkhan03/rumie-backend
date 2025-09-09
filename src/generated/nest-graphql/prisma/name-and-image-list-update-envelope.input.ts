import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NameAndImageCreateInput } from '../name-and-image/name-and-image-create.input';
import { Type } from 'class-transformer';
import { NameAndImageUpdateManyInput } from '../name-and-image/name-and-image-update-many.input';
import { NameAndImageDeleteManyInput } from './name-and-image-delete-many.input';

@InputType()
export class NameAndImageListUpdateEnvelopeInput {

    @Field(() => [NameAndImageCreateInput], {nullable:true})
    @Type(() => NameAndImageCreateInput)
    set?: Array<NameAndImageCreateInput>;

    @Field(() => [NameAndImageCreateInput], {nullable:true})
    push?: Array<NameAndImageCreateInput>;

    @Field(() => NameAndImageUpdateManyInput, {nullable:true})
    @Type(() => NameAndImageUpdateManyInput)
    updateMany?: NameAndImageUpdateManyInput;

    @Field(() => NameAndImageDeleteManyInput, {nullable:true})
    @Type(() => NameAndImageDeleteManyInput)
    deleteMany?: NameAndImageDeleteManyInput;
}
