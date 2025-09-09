import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LegacyImagesUpdateInput } from './legacy-images-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LegacyImagesWhereUniqueInput } from './legacy-images-where-unique.input';

@ArgsType()
export class UpdateOneLegacyImagesArgs {

    @Field(() => LegacyImagesUpdateInput, {nullable:false})
    @Type(() => LegacyImagesUpdateInput)
    data!: LegacyImagesUpdateInput;

    @Field(() => LegacyImagesWhereUniqueInput, {nullable:false})
    @Type(() => LegacyImagesWhereUniqueInput)
    where!: Prisma.AtLeast<LegacyImagesWhereUniqueInput, 'id' | 'oldUrl'>;
}
