import { BaseModel } from '@/platform';

// 项目级别的数据提取
export class CommonModel<T> extends BaseModel {
  public $message?: any | undefined;
  public $store?: any | undefined;
  public page: T | undefined;
  constructor(options: {$message?: any, $store?: any, page: T}) {
    super();
    this.$message = options.$message;
    this.$store = options.$store;
    this.page = options.page;
  }
}
