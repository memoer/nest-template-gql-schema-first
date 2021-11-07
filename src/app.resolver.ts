import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query('hello')
  logIn(): string {
    return 'hello';
  }
}
