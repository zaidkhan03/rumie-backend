import { Injectable } from "@nestjs/common";
import {
  MessageOrderByWithRelationInput,
  MessageWhereInput,
} from "src/---generated---";
import { DatabaseService } from "src/db/db.service";

@Injectable()
export class MessagesService {
  constructor(private readonly db: DatabaseService) {}
  async getAllOrders(
    where?: MessageWhereInput,
    take?: number,
    skip?: number,
    orderBy?: MessageOrderByWithRelationInput
  ) {
    return this.db.message.findMany({
      where,
      skip,
      take,
      orderBy,
    });
  }
}
