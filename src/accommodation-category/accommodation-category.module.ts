import { Module } from '@nestjs/common';
import { AccommodationCategoryService } from './accommodation-category.service';
import { AccommodationCategoryController } from './accommodation-category.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AccommodationCategoryController],
  providers: [AccommodationCategoryService, PrismaService],
})
export class AccommodationCategoryModule {}
