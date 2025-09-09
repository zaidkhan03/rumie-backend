import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdvertiserPOCCreateInput } from './advertiser-poc-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AdvertiserPOCCreateEnvelopeInput {

    @Field(() => AdvertiserPOCCreateInput, {nullable:true})
    @Type(() => AdvertiserPOCCreateInput)
    set?: AdvertiserPOCCreateInput;
}
