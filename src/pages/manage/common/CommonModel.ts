import { Exclude, Expose } from 'class-transformer';
import { BaseModel } from '@/platform';

// 项目级别的数据提取
@Exclude()
export class CommonModel<T> extends BaseModel {

  @Expose()
  public page: T | undefined;
}
