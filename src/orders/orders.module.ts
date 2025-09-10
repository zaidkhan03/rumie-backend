import { Module } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { OrdersResolver } from "./orders.resolver";
import { DataBaseModule } from "src/db/db.module";

@Module({
  imports: [DataBaseModule],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
