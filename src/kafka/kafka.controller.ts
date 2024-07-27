import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ConsumerDto } from './dto/consumer.dto';
import { KafkaConsumerService } from './kafka.consumer.service';

@Controller('kafka')
export class KafkaController {
    constructor(private readonly kafkaConsumerService: KafkaConsumerService) {}

    @Post('consumer')
    async consumer(@Body(new ValidationPipe()) consumerDto: ConsumerDto) {
        await this.kafkaConsumerService.initializeConsumer(consumerDto.topics);
    }
}
