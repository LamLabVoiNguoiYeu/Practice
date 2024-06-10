import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewService {
  private prisma : PrismaService
  async create(createReviewDto: CreateReviewDto) {
    return await this.prisma.review.create({data: createReviewDto})
  }

  async findAll() {
    return await this.prisma.review.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.review.findFirstOrThrow();
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    return await this.prisma.review.update({where: {id}, data:updateReviewDto})
  }

  async remove(id: string) {
    return await this.prisma.review.delete({where: {id}});
  }
}
