import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CTAType } from './cta-type.enum';

@InputType()
export class EnumCTATypeFieldUpdateOperationsInput {

    @Field(() => CTAType, {nullable:true})
    set?: `${CTAType}`;
}
