import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HobbyCreateManyInput } from './hobby-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHobbyArgs {

    @Field(() => [HobbyCreateManyInput], {nullable:false})
    @Type(() => HobbyCreateManyInput)
    data!: Array<HobbyCreateManyInput>;
}
