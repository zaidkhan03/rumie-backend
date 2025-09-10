import { Injectable } from "@nestjs/common";
import {
  ConversationOrderByWithRelationInput,
  ConversationWhereInput,
} from "src/---generated---";
import { DatabaseService } from "src/db/db.service";

@Injectable()
export class ConversationsService {
  constructor(private readonly db: DatabaseService) {}
  async getAllConversations(
    where?: ConversationWhereInput,
    take?: number,
    skip?: number,
    orderBy?: ConversationOrderByWithRelationInput
  ) {
    return this.db.conversation.findMany({
      where,
      skip,
      take,
      orderBy,
    });
  }
}
