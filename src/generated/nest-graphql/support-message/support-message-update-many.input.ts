import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportMessageWhereInput } from './support-message-where.input';
import { Type } from 'class-transformer';
import { SupportMessageUpdateInput } from './support-message-update.input';

@InputType()
export class SupportMessageUpdateManyInput {

    @Field(() => SupportMessageWhereInput, {nullable:false})
    @Type(() => SupportMessageWhereInput)
    where!: SupportMessageWhereInput;

    @Field(() => SupportMessageUpdateInput, {nullable:false})
    @Type(() => SupportMessageUpdateInput)
    data!: SupportMessageUpdateInput;
}
