import { DataAccess } from '../dao/LoginDao';
import { CommonService } from '@/pages/manage/common/CommonService';
import { CommonModel } from '@/pages/manage/common/CommonModel';
import LoginPage from '../model/LoginPage';
// 服务层
export default class Service extends CommonService {
    private dataAccess: DataAccess;
    constructor(model: CommonModel<LoginPage>) {
      super();
      this.dataAccess = new DataAccess(model);
    }

}
