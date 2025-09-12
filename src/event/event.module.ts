import { Module } from "@nestjs/common";
import { EventController } from "./event.controller";
import { EventService } from "./event.service";
import { DatabaseService } from "src/db/db.service";

@Module({
  providers: [EventService, DatabaseService],
  controllers: [EventController],
})
export class EventModule {}
