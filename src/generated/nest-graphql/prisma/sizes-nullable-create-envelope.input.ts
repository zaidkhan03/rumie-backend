import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SizesCreateInput } from '../sizes/sizes-create.input';
import { Type } from 'class-transformer';

@InputType()
export class SizesNullableCreateEnvelopeInput {

    @Field(() => SizesCreateInput, {nullable:true})
    @Type(() => SizesCreateInput)
    set?: SizesCreateInput;
}
