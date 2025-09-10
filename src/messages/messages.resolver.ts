import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { MessagesService } from "./messages.service";
import {
  MessageOrderByWithRelationInput,
  MessageWhereInput,
  Message,
} from "src/---generated---";

@Resolver("Message")
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Query(() => [Message])
  async messages(
    @Args("where", { nullable: true }) where?: MessageWhereInput,
    @Args("take", { type: () => Int, nullable: true }) take?: number,
    @Args("skip", { type: () => Int, nullable: true }) skip?: number,
    @Args("orderBy", { nullable: true })
    orderBy?: MessageOrderByWithRelationInput
  ) {
    return this.messagesService.getAllOrders(where, take, skip, orderBy);
  }
}
