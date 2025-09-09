import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserGenderFilter } from './user-gender-filter.enum';

@InputType()
export class EnumUserGenderFilterFieldUpdateOperationsInput {

    @Field(() => UserGenderFilter, {nullable:true})
    set?: `${UserGenderFilter}`;
}
