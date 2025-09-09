import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonalDMCreateparticipantIdsInput } from './personal-dm-createparticipant-ids.input';

@InputType()
export class PersonalDMUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    initiatedBy!: string;

    @Field(() => PersonalDMCreateparticipantIdsInput, {nullable:true})
    participantIds?: PersonalDMCreateparticipantIdsInput;

    @Field(() => String, {nullable:true})
    lastMessageId?: string;

    @Field(() => Boolean, {nullable:true})
    valid?: boolean;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => String, {nullable:true})
    payload?: string;

    @Field(() => String, {nullable:true})
    consumersLastSeen?: string;

    @Field(() => String, {nullable:true})
    providersLastSeen?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
