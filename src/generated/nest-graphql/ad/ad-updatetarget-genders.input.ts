import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';

@InputType()
export class AdUpdatetargetGendersInput {

    @Field(() => [Gender], {nullable:true})
    set?: Array<`${Gender}`>;

    @Field(() => [Gender], {nullable:true})
    push?: Array<`${Gender}`>;
}
