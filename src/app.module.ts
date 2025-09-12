import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";
import { AppController } from "./app.controller";
import { DataBaseModule } from "./db/db.module";
import { DatabaseService } from "./db/db.service";
import { UsersModule } from "./users/users.module";
import { ProductListingsModule } from "./product-listings/product-listings.module";
import { PaymentsModule } from "./payments/payments.module";
import { OrdersModule } from "./orders/orders.module";
import { MessagesModule } from "./messages/messages.module";
import { ConversationsModule } from "./conversations/conversations.module";
import { UniversityAdminsModule } from "./university-admins/university-admins.module";
import { SessionsModule } from "./sessions/sessions.module";
import { AuthModule } from "./auth/auth.module";
import { CampaignModule } from "./campaign/campaign.module";
import { EventModule } from "./event/event.module";
import { InstitutionModule } from "./institution/institution.module";
import { LocalistModule } from "./localist/localist.module";
import { ScrapperModule } from "./scraper/scraper.module";
import { SupportRequestModule } from "./support-request/support-request.module";

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: true,
      introspection: true,
      subscription: true,
    }),
    DataBaseModule,
    UsersModule,
    ProductListingsModule,
    PaymentsModule,
    OrdersModule,
    MessagesModule,
    ConversationsModule,
    UniversityAdminsModule,
    SessionsModule,
    AuthModule,
    CampaignModule,
    EventModule,
    InstitutionModule,
    LocalistModule,
    ScrapperModule,
    SupportRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
