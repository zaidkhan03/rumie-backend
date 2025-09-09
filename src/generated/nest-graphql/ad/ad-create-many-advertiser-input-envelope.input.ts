import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateManyAdvertiserInput } from './ad-create-many-advertiser.input';
import { Type } from 'class-transformer';

@InputType()
export class AdCreateManyAdvertiserInputEnvelope {

    @Field(() => [AdCreateManyAdvertiserInput], {nullable:false})
    @Type(() => AdCreateManyAdvertiserInput)
    data!: Array<AdCreateManyAdvertiserInput>;
}
