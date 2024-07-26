import { Module } from '@nestjs/common';
import { KafkaController } from './kafka.controller';
import { KafkaConsumerService } from './kafka.consumer.service';

@Module({
  imports: [],
  controllers: [KafkaController],
  providers: [KafkaConsumerService],
  exports: [],
})
export class KafkaModule {}
