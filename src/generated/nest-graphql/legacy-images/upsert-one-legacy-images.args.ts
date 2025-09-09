import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LegacyImagesWhereUniqueInput } from './legacy-images-where-unique.input';
import { Type } from 'class-transformer';
import { LegacyImagesCreateInput } from './legacy-images-create.input';
import { LegacyImagesUpdateInput } from './legacy-images-update.input';

@ArgsType()
export class UpsertOneLegacyImagesArgs {

    @Field(() => LegacyImagesWhereUniqueInput, {nullable:false})
    @Type(() => LegacyImagesWhereUniqueInput)
    where!: Prisma.AtLeast<LegacyImagesWhereUniqueInput, 'id' | 'oldUrl'>;

    @Field(() => LegacyImagesCreateInput, {nullable:false})
    @Type(() => LegacyImagesCreateInput)
    create!: LegacyImagesCreateInput;

    @Field(() => LegacyImagesUpdateInput, {nullable:false})
    @Type(() => LegacyImagesUpdateInput)
    update!: LegacyImagesUpdateInput;
}
