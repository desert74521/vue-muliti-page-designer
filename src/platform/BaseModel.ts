import { Exclude, Expose } from 'class-transformer';

// 提取平台公用的字段
export class BaseModel {

  public sessionStorage?: any = sessionStorage;

  public localStorage?: any = localStorage;

  public cookie?: any = document && document.cookie;

  public urlParams?: any = {};

  public window?: any = window;

}
