import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LegacyImagesUpdateManyMutationInput } from './legacy-images-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LegacyImagesWhereInput } from './legacy-images-where.input';

@ArgsType()
export class UpdateManyLegacyImagesArgs {

    @Field(() => LegacyImagesUpdateManyMutationInput, {nullable:false})
    @Type(() => LegacyImagesUpdateManyMutationInput)
    data!: LegacyImagesUpdateManyMutationInput;

    @Field(() => LegacyImagesWhereInput, {nullable:true})
    @Type(() => LegacyImagesWhereInput)
    where?: LegacyImagesWhereInput;
}
