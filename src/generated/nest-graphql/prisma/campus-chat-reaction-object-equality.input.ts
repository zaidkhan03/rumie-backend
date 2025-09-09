import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionType } from './reaction-type.enum';

@InputType()
export class CampusChatReactionObjectEqualityInput {

    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
}
