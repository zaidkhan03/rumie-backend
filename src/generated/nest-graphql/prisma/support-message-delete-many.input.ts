import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportMessageWhereInput } from '../support-message/support-message-where.input';
import { Type } from 'class-transformer';

@InputType()
export class SupportMessageDeleteManyInput {

    @Field(() => SupportMessageWhereInput, {nullable:false})
    @Type(() => SupportMessageWhereInput)
    where!: SupportMessageWhereInput;
}
