
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import { configDotenv } from "dotenv"

configDotenv();

export const ratelimit = new Ratelimit({

    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "20s")
})
