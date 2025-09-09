import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BannerPosition } from '../prisma/banner-position.enum';

@InputType()
export class BannerCreatepositionsInput {

    @Field(() => [BannerPosition], {nullable:false})
    set!: Array<`${BannerPosition}`>;
}
