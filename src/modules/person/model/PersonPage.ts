import { Exclude, Expose } from 'class-transformer';
import Person from './Person';

@Exclude()
export default class PersonPage {

  public isLoading: boolean = true;

  @Expose()
  public persons: Person[] | undefined;

  @Expose()
  public pageNum: number = 0;

  @Expose()
  public pageSize: number = 10;
}
