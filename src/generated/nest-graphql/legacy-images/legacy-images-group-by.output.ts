import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LegacyImagesCountAggregate } from './legacy-images-count-aggregate.output';
import { LegacyImagesMinAggregate } from './legacy-images-min-aggregate.output';
import { LegacyImagesMaxAggregate } from './legacy-images-max-aggregate.output';

@ObjectType()
export class LegacyImagesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    oldUrl!: string;

    @Field(() => String, {nullable:false})
    newUrl!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => LegacyImagesCountAggregate, {nullable:true})
    _count?: LegacyImagesCountAggregate;

    @Field(() => LegacyImagesMinAggregate, {nullable:true})
    _min?: LegacyImagesMinAggregate;

    @Field(() => LegacyImagesMaxAggregate, {nullable:true})
    _max?: LegacyImagesMaxAggregate;
}
