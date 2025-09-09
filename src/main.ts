import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
    );

    app.enableCors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    });

    app.useGlobalPipes(new ValidationPipe());

    const port = 3005;
    const host = "0.0.0.0";

    await app.listen(port, host);

    console.log("Application is running!");
    console.log(`Server: http://localhost:${port}`);
    console.log(`GraphQL Playground: http://localhost:${port}/graphql`);
  } catch (error) {
    console.error("ERROR:", error.message);
    process.exit(1);
  }
}
bootstrap();
