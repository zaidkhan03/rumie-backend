import { Module } from "@nestjs/common";
import { SupportRequestService } from "./support-request.service";
import { SupportRequestResolver } from "./support-request.resolver";

@Module({
  providers: [SupportRequestService, SupportRequestResolver],
})
export class SupportRequestModule {}
