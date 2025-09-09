import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LegacyImagesWhereInput } from './legacy-images-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LegacyImagesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    oldUrl?: string;

    @Field(() => [LegacyImagesWhereInput], {nullable:true})
    AND?: Array<LegacyImagesWhereInput>;

    @Field(() => [LegacyImagesWhereInput], {nullable:true})
    OR?: Array<LegacyImagesWhereInput>;

    @Field(() => [LegacyImagesWhereInput], {nullable:true})
    NOT?: Array<LegacyImagesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    newUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
