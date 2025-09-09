import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SystemIcons } from './system-icons.enum';

@InputType()
export class EnumSystemIconsFieldUpdateOperationsInput {

    @Field(() => SystemIcons, {nullable:true})
    set?: `${SystemIcons}`;
}
