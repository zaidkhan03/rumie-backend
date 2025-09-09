import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumMessageActionTypeFilter } from '../prisma/enum-message-action-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MessageActionWhereInput {

    @Field(() => [MessageActionWhereInput], {nullable:true})
    AND?: Array<MessageActionWhereInput>;

    @Field(() => [MessageActionWhereInput], {nullable:true})
    OR?: Array<MessageActionWhereInput>;

    @Field(() => [MessageActionWhereInput], {nullable:true})
    NOT?: Array<MessageActionWhereInput>;

    @Field(() => EnumMessageActionTypeFilter, {nullable:true})
    type?: EnumMessageActionTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    label?: StringFilter;
}
