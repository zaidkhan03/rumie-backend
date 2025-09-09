import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumSystemIconsFilter } from '../prisma/enum-system-icons-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class InfoSystemMessageWhereInput {

    @Field(() => [InfoSystemMessageWhereInput], {nullable:true})
    AND?: Array<InfoSystemMessageWhereInput>;

    @Field(() => [InfoSystemMessageWhereInput], {nullable:true})
    OR?: Array<InfoSystemMessageWhereInput>;

    @Field(() => [InfoSystemMessageWhereInput], {nullable:true})
    NOT?: Array<InfoSystemMessageWhereInput>;

    @Field(() => EnumSystemIconsFilter, {nullable:true})
    icon?: EnumSystemIconsFilter;

    @Field(() => StringFilter, {nullable:true})
    text1?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text2?: StringFilter;
}
