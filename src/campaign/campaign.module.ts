import { Module } from "@nestjs/common";
import { CampaignService } from "./campaign.service";
import { CampaignResolver } from "./campaign.resolver";

@Module({
  providers: [CampaignService, CampaignResolver],
})
export class CampaignModule {}
