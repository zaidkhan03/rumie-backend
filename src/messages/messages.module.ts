import { Module } from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { MessagesResolver } from "./messages.resolver";
import { DataBaseModule } from "src/db/db.module";

@Module({
  providers: [MessagesResolver, MessagesService],
  imports: [DataBaseModule],
})
export class MessagesModule {}
