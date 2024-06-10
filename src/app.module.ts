import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { HostModule } from './host/host.module';
import { AccommodationModule } from './accommodation/accommodation.module';
import { ReviewModule } from './review/review.module';
import { BookingModule } from './booking/booking.module';
import { ImageModule } from './image/image.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, HostModule, AccommodationModule, ReviewModule, BookingModule, ImageModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
