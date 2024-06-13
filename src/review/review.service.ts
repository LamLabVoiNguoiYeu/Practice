import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto, UpdateReviewDto } from './dto';

@Injectable()
export class ReviewService {
  constructor(
    private prisma : PrismaService
  ){}
  async create(createReviewDto: CreateReviewDto) {
    const{content, accommodationId, userId, rating} = createReviewDto
    return await this.prisma.review.create({
      data: {
        user: {
          connect: {user_id: userId}
        },
        accommodation: {
          connect: {accommodation_id: accommodationId}
        },
        content,
        rating
      }
    })
  }

  async findAll() {
    return await this.prisma.review.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.review.findFirstOrThrow({where: {review_id: id}});
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    const{content, accommodationId, userId, rating} = updateReviewDto
    return await this.prisma.review.update({
      where: {review_id: id},
      data: {
        user: {
          connect: {user_id: userId}
        },
        accommodation: {
          connect: {accommodation_id: accommodationId}
        },
        content,
        rating
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.review.delete({where: {review_id: id}});
  }
}