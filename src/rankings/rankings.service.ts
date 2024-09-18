import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RankingsService {
  private readonly logger = new Logger(RankingsService.name);

  async processMatch(idMatch: string, match: any): Promise<void> {
    this.logger.log(`idMatch: ${idMatch} match: ${JSON.stringify(match)}`);
  }
}
