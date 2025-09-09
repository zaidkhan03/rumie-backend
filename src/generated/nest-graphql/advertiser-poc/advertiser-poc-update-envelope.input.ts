import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdvertiserPOCCreateInput } from './advertiser-poc-create.input';
import { Type } from 'class-transformer';
import { AdvertiserPOCUpdateInput } from './advertiser-poc-update.input';

@InputType()
export class AdvertiserPOCUpdateEnvelopeInput {

    @Field(() => AdvertiserPOCCreateInput, {nullable:true})
    @Type(() => AdvertiserPOCCreateInput)
    set?: AdvertiserPOCCreateInput;

    @Field(() => AdvertiserPOCUpdateInput, {nullable:true})
    @Type(() => AdvertiserPOCUpdateInput)
    update?: AdvertiserPOCUpdateInput;
}
