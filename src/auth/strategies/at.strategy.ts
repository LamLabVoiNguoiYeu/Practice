import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../types/jwtPayload.type";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.AT_JWT_SECRET,
          });
        }

        validate(payload: JwtPayload) {
            return payload;
          }
    }