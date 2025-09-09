import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReactionType } from '../prisma/reaction-type.enum';

@ObjectType()
export class CampusChatReaction {

    @Field(() => ReactionType, {nullable:false})
    type!: `${ReactionType}`;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
