import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InternalCTA } from './internal-cta.enum';

@InputType()
export class NullableEnumInternalCTAFieldUpdateOperationsInput {

    @Field(() => InternalCTA, {nullable:true})
    set?: `${InternalCTA}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
