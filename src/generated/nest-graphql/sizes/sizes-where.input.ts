import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class SizesWhereInput {

    @Field(() => [SizesWhereInput], {nullable:true})
    AND?: Array<SizesWhereInput>;

    @Field(() => [SizesWhereInput], {nullable:true})
    OR?: Array<SizesWhereInput>;

    @Field(() => [SizesWhereInput], {nullable:true})
    NOT?: Array<SizesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    shoes?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    upperWear?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lowerWear?: StringFilter;
}
