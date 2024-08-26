import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MailerModule } from "@nestjs-modules/mailer";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "7day" },
    }),

    // MailerModule.forRoot({
    //   transport: {
    //     host: process.env.EMAIL_HOST,
    //     secure: true,
    //     auth: {
    //         user: process.env.EMAIL_USERNAME,
    //         pass: process.env.EMAIL_PASSWORD,
    //     },
    //   },
    // }),
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
