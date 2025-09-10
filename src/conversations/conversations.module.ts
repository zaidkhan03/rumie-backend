import { Module } from "@nestjs/common";
import { ConversationsService } from "./conversations.service";
import { ConversationsResolver } from "./conversations.resolver";
import { DataBaseModule } from "src/db/db.module";

@Module({
  providers: [ConversationsResolver, ConversationsService],
  imports: [DataBaseModule],
})
export class ConversationsModule {}
