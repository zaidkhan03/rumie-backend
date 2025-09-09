import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdVisibility } from '../prisma/ad-visibility.enum';

@InputType()
export class AdUpdatevisibilityInput {

    @Field(() => [AdVisibility], {nullable:true})
    set?: Array<`${AdVisibility}`>;

    @Field(() => [AdVisibility], {nullable:true})
    push?: Array<`${AdVisibility}`>;
}
