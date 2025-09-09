import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';

@InputType()
export class AdCreatetargetGendersInput {

    @Field(() => [Gender], {nullable:false})
    set!: Array<`${Gender}`>;
}
