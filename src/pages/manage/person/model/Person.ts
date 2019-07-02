import { Exclude, Expose } from 'class-transformer';

@Exclude()
export default class Person {
  @Expose()
  public name: string = '';

  @Expose()
  public age: number = 0;

  @Expose()
  public sex: string = '男';

  @Expose()
  public address: string = '';

  @Expose()
  public phone: string = '';
}
