import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SizesCreateInput } from '../sizes/sizes-create.input';
import { Type } from 'class-transformer';
import { SizesUpdateInput } from '../sizes/sizes-update.input';

@InputType()
export class SizesUpsertInput {

    @Field(() => SizesCreateInput, {nullable:false})
    @Type(() => SizesCreateInput)
    set!: SizesCreateInput;

    @Field(() => SizesUpdateInput, {nullable:false})
    @Type(() => SizesUpdateInput)
    update!: SizesUpdateInput;
}
