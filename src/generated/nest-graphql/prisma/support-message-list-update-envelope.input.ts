import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupportMessageCreateInput } from '../support-message/support-message-create.input';
import { Type } from 'class-transformer';
import { SupportMessageUpdateManyInput } from '../support-message/support-message-update-many.input';
import { SupportMessageDeleteManyInput } from './support-message-delete-many.input';

@InputType()
export class SupportMessageListUpdateEnvelopeInput {

    @Field(() => [SupportMessageCreateInput], {nullable:true})
    @Type(() => SupportMessageCreateInput)
    set?: Array<SupportMessageCreateInput>;

    @Field(() => [SupportMessageCreateInput], {nullable:true})
    push?: Array<SupportMessageCreateInput>;

    @Field(() => SupportMessageUpdateManyInput, {nullable:true})
    @Type(() => SupportMessageUpdateManyInput)
    updateMany?: SupportMessageUpdateManyInput;

    @Field(() => SupportMessageDeleteManyInput, {nullable:true})
    @Type(() => SupportMessageDeleteManyInput)
    deleteMany?: SupportMessageDeleteManyInput;
}
