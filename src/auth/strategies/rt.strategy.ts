import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.RT_JWT_SECRET,
          });
        }

        validate(req: Request, payload: any) {
          const refreshToken = req.get('authorization').replace('Bearer','').trim();
          return {
            ...payload,
            refreshToken,
        }
    }
  }