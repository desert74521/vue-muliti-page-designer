import { DataAccess } from '../dao/UserInfoDao';
import UserInfo from '../model/UserInfo';
import { BaseService } from '@/platform';
// 服务层
export default class Service extends BaseService {
    private dataAccess: DataAccess;
    constructor(model: UserInfo) {
      super();
      this.dataAccess = new DataAccess(model);
    }

    public initUserInfo(): void {
        this.dataAccess.initUserInfo();
    }

    public loginOut(): void {
        this.dataAccess.loginOut();
    }


}

