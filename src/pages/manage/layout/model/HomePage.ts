import { Exclude, Expose } from 'class-transformer';

@Exclude()
export default class HomePage {

  public homeImg: string | undefined;

  @Expose()
  public sideWidth: number | undefined;

  @Expose()
  public routers: object[] | undefined;
}
