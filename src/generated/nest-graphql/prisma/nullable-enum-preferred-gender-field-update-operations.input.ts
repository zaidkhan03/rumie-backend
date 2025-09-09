import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreferredGender } from './preferred-gender.enum';

@InputType()
export class NullableEnumPreferredGenderFieldUpdateOperationsInput {

    @Field(() => PreferredGender, {nullable:true})
    set?: `${PreferredGender}`;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
