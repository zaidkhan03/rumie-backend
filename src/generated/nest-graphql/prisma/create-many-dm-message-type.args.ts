import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DMMessageTypeCreateManyInput } from '../dm-message-type/dm-message-type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDmMessageTypeArgs {

    @Field(() => [DMMessageTypeCreateManyInput], {nullable:false})
    @Type(() => DMMessageTypeCreateManyInput)
    data!: Array<DMMessageTypeCreateManyInput>;
}
