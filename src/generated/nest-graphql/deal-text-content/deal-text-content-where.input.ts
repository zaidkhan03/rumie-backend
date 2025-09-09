import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DealTextContentWhereInput {

    @Field(() => [DealTextContentWhereInput], {nullable:true})
    AND?: Array<DealTextContentWhereInput>;

    @Field(() => [DealTextContentWhereInput], {nullable:true})
    OR?: Array<DealTextContentWhereInput>;

    @Field(() => [DealTextContentWhereInput], {nullable:true})
    NOT?: Array<DealTextContentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    heading?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    paragraph?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    pointers?: StringFilter;
}
