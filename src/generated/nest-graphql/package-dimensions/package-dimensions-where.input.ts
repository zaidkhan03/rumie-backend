import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PackageDimensionsWhereInput {

    @Field(() => [PackageDimensionsWhereInput], {nullable:true})
    AND?: Array<PackageDimensionsWhereInput>;

    @Field(() => [PackageDimensionsWhereInput], {nullable:true})
    OR?: Array<PackageDimensionsWhereInput>;

    @Field(() => [PackageDimensionsWhereInput], {nullable:true})
    NOT?: Array<PackageDimensionsWhereInput>;

    @Field(() => FloatFilter, {nullable:true})
    height?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    width?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    length?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    unit?: StringFilter;
}
