import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NameAndImageObjectEqualityInput } from './name-and-image-object-equality.input';
import { NameAndImageWhereInput } from '../name-and-image/name-and-image-where.input';

@InputType()
export class NameAndImageCompositeListFilter {

    @Field(() => [NameAndImageObjectEqualityInput], {nullable:true})
    equals?: Array<NameAndImageObjectEqualityInput>;

    @Field(() => NameAndImageWhereInput, {nullable:true})
    every?: NameAndImageWhereInput;

    @Field(() => NameAndImageWhereInput, {nullable:true})
    some?: NameAndImageWhereInput;

    @Field(() => NameAndImageWhereInput, {nullable:true})
    none?: NameAndImageWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
