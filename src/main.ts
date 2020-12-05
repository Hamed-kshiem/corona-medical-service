import { NestFactory } from '@nestjs/core';
import { from } from 'rxjs';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
    .setTitle('CoronaMedicalService')
    .setDescription(
      'Verwalten von medizinischem Personal (Ärzte, Pfleger, …) für die Betreuung von CoronaPatienten, Betreuungseinrichtung, Ausfälle (Corona-Erkrankung), ...',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3001);
}
bootstrap();
