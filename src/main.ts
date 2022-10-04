import { Options } from '@nestjs/common';
import {MicroserviceOptions, Transport} from "@nestjs/microservices"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ["pkc-3w22w.us-central1.gcp.confluent.cloud:9092"],
          ssl: true,
          sasl: {
            mechanism: 'plain',
            username:'624CZI36XY2P3KTC',
            password:'D4hzZpiFcgLSYmA8ykcPed5TviJQvwdScyxOU7RDig5z+PVVIm/dSTmbURMdDSzK',
          }
        }
      }
    }
  );
  app.listen().then(()=> console.log("app is listening"));
}
bootstrap();

