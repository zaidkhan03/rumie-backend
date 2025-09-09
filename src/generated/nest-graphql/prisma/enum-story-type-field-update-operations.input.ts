import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StoryType } from './story-type.enum';

@InputType()
export class EnumStoryTypeFieldUpdateOperationsInput {

    @Field(() => StoryType, {nullable:true})
    set?: `${StoryType}`;
}
