import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerType } from './banner-type.enum';

@InputType()
export class EnumBannerTypeFieldUpdateOperationsInput {

    @Field(() => BannerType, {nullable:true})
    set?: `${BannerType}`;
}
