import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LegacyImagesCreateInput } from './legacy-images-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLegacyImagesArgs {

    @Field(() => LegacyImagesCreateInput, {nullable:false})
    @Type(() => LegacyImagesCreateInput)
    data!: LegacyImagesCreateInput;
}
