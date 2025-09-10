import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { MercuriusDriver, MercuriusDriverConfig } from "@nestjs/mercurius";
import { AppController } from "./app.controller";
import { DataBaseModule } from "./db/db.module";
import { DatabaseService } from "./db/db.service";
import { UsersModule } from "./users/users.module";
import { ProductListingsModule } from './product-listings/product-listings.module';
import { PaymentsModule } from './payments/payments.module';
import { OrdersModule } from './orders/orders.module';
import { MessagesModule } from './messages/messages.module';
import { ConversationsModule } from './conversations/conversations.module';

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
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
