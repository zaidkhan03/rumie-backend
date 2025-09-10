import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/db/db.service";
import {
  OrderOrderByWithRelationInput,
  OrderWhereInput,
} from "src/---generated---";

@Injectable()
export class OrdersService {
  constructor(private readonly db: DatabaseService) {}

  async getAllOrders(
    where?: OrderWhereInput,
    take?: number,
    skip?: number,
    orderBy?: OrderOrderByWithRelationInput
  ) {
    return this.db.order.findMany({ where, skip, take, orderBy });
  }
}
