import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EduInstituteSelectOption } from '../edu-institute-select-option/edu-institute-select-option.model';
import { DealBusinessDetails } from '../deal-business-details/deal-business-details.model';
import { DealTextContent } from '../deal-text-content/deal-text-content.model';
import { DealType } from '../prisma/deal-type.enum';
import { DateRange } from '../date-range/date-range.model';
import { User } from '../user/user.model';
import { DealCount } from './deal-count.output';

@ObjectType()
export class Deal {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => [EduInstituteSelectOption], {nullable:true})
    selectedEduInstitutes?: Array<EduInstituteSelectOption>;

    @Field(() => DealBusinessDetails, {nullable:false})
    business?: DealBusinessDetails;

    @Field(() => DealTextContent, {nullable:false})
    content?: DealTextContent;

    @Field(() => String, {nullable:true})
    url!: string | null;

    @Field(() => DealType, {nullable:false})
    type!: `${DealType}`;

    @Field(() => String, {defaultValue:'',nullable:false})
    couponCode!: string;

    @Field(() => DateRange, {nullable:false})
    validity?: DateRange;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [String], {nullable:true})
    savedUserIds!: Array<string>;

    @Field(() => [User], {nullable:true})
    savedUsers?: Array<User>;

    @Field(() => DealCount, {nullable:false})
    _count?: DealCount;
}
