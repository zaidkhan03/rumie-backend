import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class LocalOrderUpdateMessageWhereInput {

    @Field(() => [LocalOrderUpdateMessageWhereInput], {nullable:true})
    AND?: Array<LocalOrderUpdateMessageWhereInput>;

    @Field(() => [LocalOrderUpdateMessageWhereInput], {nullable:true})
    OR?: Array<LocalOrderUpdateMessageWhereInput>;

    @Field(() => [LocalOrderUpdateMessageWhereInput], {nullable:true})
    NOT?: Array<LocalOrderUpdateMessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    heading?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;
}
