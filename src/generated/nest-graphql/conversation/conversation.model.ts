import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ConversationType } from '../prisma/conversation-type.enum';
import { Int } from '@nestjs/graphql';
import { ProductListing } from '../product-listing/product-listing.model';
import { User } from '../user/user.model';
import { ConversationCount } from './conversation-count.output';

@ObjectType()
export class Conversation {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    initiatedBy!: string;

    @Field(() => [String], {nullable:true})
    participantIds!: Array<string>;

    @Field(() => String, {nullable:true})
    lastMessageId!: string | null;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    valid!: boolean;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    enabled!: boolean;

    @Field(() => ConversationType, {nullable:false})
    type!: `${ConversationType}`;

    @Field(() => String, {nullable:true})
    preferredPaymentMethod!: string | null;

    @Field(() => String, {nullable:true})
    preferredAddressId!: string | null;

    @Field(() => Boolean, {nullable:true})
    paymentLinkSent!: boolean | null;

    @Field(() => Boolean, {nullable:true})
    deliveryConfirmedBySeller!: boolean | null;

    @Field(() => Int, {nullable:true})
    paymentLinkCount!: number | null;

    @Field(() => String, {nullable:true})
    orderId!: string | null;

    @Field(() => String, {nullable:true})
    payload!: string | null;

    @Field(() => String, {defaultValue:'DEFAULT',nullable:true})
    consumersLastSeen!: string | null;

    @Field(() => String, {defaultValue:'DEFAULT',nullable:true})
    providersLastSeen!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ProductListing, {nullable:false})
    product?: ProductListing;

    @Field(() => [User], {nullable:true})
    participants?: Array<User>;

    @Field(() => ConversationCount, {nullable:false})
    _count?: ConversationCount;
}
