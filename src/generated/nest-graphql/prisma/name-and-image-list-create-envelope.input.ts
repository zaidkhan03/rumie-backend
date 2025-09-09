import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NameAndImageCreateInput } from '../name-and-image/name-and-image-create.input';
import { Type } from 'class-transformer';

@InputType()
export class NameAndImageListCreateEnvelopeInput {

    @Field(() => [NameAndImageCreateInput], {nullable:true})
    @Type(() => NameAndImageCreateInput)
    set?: Array<NameAndImageCreateInput>;
}
