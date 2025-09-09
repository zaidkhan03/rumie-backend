import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PackageWeightWhereInput {

    @Field(() => [PackageWeightWhereInput], {nullable:true})
    AND?: Array<PackageWeightWhereInput>;

    @Field(() => [PackageWeightWhereInput], {nullable:true})
    OR?: Array<PackageWeightWhereInput>;

    @Field(() => [PackageWeightWhereInput], {nullable:true})
    NOT?: Array<PackageWeightWhereInput>;

    @Field(() => FloatFilter, {nullable:true})
    value?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    unit?: StringFilter;
}
