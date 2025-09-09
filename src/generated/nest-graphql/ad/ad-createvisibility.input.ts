import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdVisibility } from '../prisma/ad-visibility.enum';

@InputType()
export class AdCreatevisibilityInput {

    @Field(() => [AdVisibility], {nullable:false})
    set!: Array<`${AdVisibility}`>;
}
