import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LegacyImagesCreateManyInput } from './legacy-images-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLegacyImagesArgs {

    @Field(() => [LegacyImagesCreateManyInput], {nullable:false})
    @Type(() => LegacyImagesCreateManyInput)
    data!: Array<LegacyImagesCreateManyInput>;
}
