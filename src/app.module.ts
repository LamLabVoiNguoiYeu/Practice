import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AccommodationModule } from './accommodation/accommodation.module';
import { BookingModule } from './booking/booking.module';
import { CityModule } from './city/city.module';
import { AccommodationCategoryModule } from './accommodation-category/accommodation-category.module';
import { ReviewModule } from './review/review.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { PaymentModule } from './payment/payment.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule,AccommodationModule, BookingModule, CityModule, AccommodationCategoryModule, ReviewModule, PaymentMethodModule, PaymentModule, ImageModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
