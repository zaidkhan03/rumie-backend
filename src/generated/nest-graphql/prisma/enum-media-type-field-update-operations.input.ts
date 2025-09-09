import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaType } from './media-type.enum';

@InputType()
export class EnumMediaTypeFieldUpdateOperationsInput {

    @Field(() => MediaType, {nullable:true})
    set?: `${MediaType}`;
}
