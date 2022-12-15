import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['fresh-cat-14650-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZnJlc2gtY2F0LTE0NjUwJNw1pu1OqXSAsLL06VPLxlaeM5d0RrdBXzTL6gDv3lY',
          password:
            'CMkWR4ThBEAtB0Ki5ZWybSpsqwxnqPAtCZEaUaRHftouAOZrl8FbBWNCMIGKhJoozgtYZg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
