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
          brokers: [process.env.KAFKA_SERVER],
          ssl: true,
          sasl: {
            mechanism: 'plain',
            username: process.env.KAFKA_USERNAME,
            password: process.env.KAFKA_PASSWORD,
          }
        }
      }
    }
  );
  app.listen().then(()=> console.log("app is listening"));
}
bootstrap();

