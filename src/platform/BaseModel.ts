import { Exclude, Expose } from 'class-transformer';

// 提取平台公用的字段
@Exclude()
export class BaseModel {
  @Expose()
  public $store: any = '';
  @Expose()
  public $message: any | undefined;
}
