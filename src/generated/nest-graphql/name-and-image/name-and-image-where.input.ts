import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class NameAndImageWhereInput {

    @Field(() => [NameAndImageWhereInput], {nullable:true})
    AND?: Array<NameAndImageWhereInput>;

    @Field(() => [NameAndImageWhereInput], {nullable:true})
    OR?: Array<NameAndImageWhereInput>;

    @Field(() => [NameAndImageWhereInput], {nullable:true})
    NOT?: Array<NameAndImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;
}
