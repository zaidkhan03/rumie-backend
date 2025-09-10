import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { ConversationsService } from "./conversations.service";
import { Conversation } from "src/---generated---";
import {
  ConversationOrderByWithRelationInput,
  ConversationWhereInput,
} from "src/---generated---";

@Resolver()
export class ConversationsResolver {
  constructor(private readonly conversationsService: ConversationsService) {}
  @Query(() => [Conversation])
  async conversations(
    @Args("where", { nullable: true }) where?: ConversationWhereInput,
    @Args("take", { type: () => Int, nullable: true }) take?: number,
    @Args("skip", { type: () => Int, nullable: true }) skip?: number,
    @Args("orderBy", { nullable: true })
    orderBy?: ConversationOrderByWithRelationInput
  ) {
    return this.conversationsService.getAllConversations(
      where,
      take,
      skip,
      orderBy
    );
  }
}
