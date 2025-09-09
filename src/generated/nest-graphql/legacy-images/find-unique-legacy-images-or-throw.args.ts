import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LegacyImagesWhereUniqueInput } from './legacy-images-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueLegacyImagesOrThrowArgs {

    @Field(() => LegacyImagesWhereUniqueInput, {nullable:false})
    @Type(() => LegacyImagesWhereUniqueInput)
    where!: Prisma.AtLeast<LegacyImagesWhereUniqueInput, 'id' | 'oldUrl'>;
}
