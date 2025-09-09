import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerPosition } from '../prisma/banner-position.enum';

@InputType()
export class BannerUpdatepositionsInput {

    @Field(() => [BannerPosition], {nullable:true})
    set?: Array<`${BannerPosition}`>;

    @Field(() => [BannerPosition], {nullable:true})
    push?: Array<`${BannerPosition}`>;
}
