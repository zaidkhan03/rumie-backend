import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';

@InputType()
export class CampusChatReactionCreateInput {

    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
}
