import { NestFactory } from "@nestjs/core";
import {AppModule} from "./app.module";

// Adding a function that will run each time, when we will start our application.
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();