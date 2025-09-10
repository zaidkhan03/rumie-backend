import { Module } from "@nestjs/common";
import { PaymentsService } from "./payments.service";
import { PaymentsResolver } from "./payments.resolver";
import { DataBaseModule } from "src/db/db.module";

@Module({
  imports: [DataBaseModule],
  providers: [PaymentsResolver, PaymentsService],
})
export class PaymentsModule {}
