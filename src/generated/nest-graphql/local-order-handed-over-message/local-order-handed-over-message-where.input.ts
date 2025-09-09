import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class LocalOrderHandedOverMessageWhereInput {

    @Field(() => [LocalOrderHandedOverMessageWhereInput], {nullable:true})
    AND?: Array<LocalOrderHandedOverMessageWhereInput>;

    @Field(() => [LocalOrderHandedOverMessageWhereInput], {nullable:true})
    OR?: Array<LocalOrderHandedOverMessageWhereInput>;

    @Field(() => [LocalOrderHandedOverMessageWhereInput], {nullable:true})
    NOT?: Array<LocalOrderHandedOverMessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    buyerHeading?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    buyerDescription?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sellerHeading?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sellerDescription?: StringFilter;
}
