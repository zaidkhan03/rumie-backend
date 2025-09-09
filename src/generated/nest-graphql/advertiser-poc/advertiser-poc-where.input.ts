import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AdvertiserPOCWhereInput {

    @Field(() => [AdvertiserPOCWhereInput], {nullable:true})
    AND?: Array<AdvertiserPOCWhereInput>;

    @Field(() => [AdvertiserPOCWhereInput], {nullable:true})
    OR?: Array<AdvertiserPOCWhereInput>;

    @Field(() => [AdvertiserPOCWhereInput], {nullable:true})
    NOT?: Array<AdvertiserPOCWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;
}
