import { Module } from '@nestjs/common';
import { HostService } from './host.service';
import { HostController } from './host.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [HostController],
  providers: [HostService, PrismaService],
})
export class HostModule {}
