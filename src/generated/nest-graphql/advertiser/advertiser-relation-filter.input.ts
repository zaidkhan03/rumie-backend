import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdvertiserWhereInput } from './advertiser-where.input';

@InputType()
export class AdvertiserRelationFilter {

    @Field(() => AdvertiserWhereInput, {nullable:true})
    is?: AdvertiserWhereInput;

    @Field(() => AdvertiserWhereInput, {nullable:true})
    isNot?: AdvertiserWhereInput;
}
