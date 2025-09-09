import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LegacyImagesWhereInput } from './legacy-images-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyLegacyImagesArgs {

    @Field(() => LegacyImagesWhereInput, {nullable:true})
    @Type(() => LegacyImagesWhereInput)
    where?: LegacyImagesWhereInput;
}
