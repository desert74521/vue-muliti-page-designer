import { DataAccess } from '../dao/LayoutDao';
import { CommonService } from '@/pages/login/common/CommonService';
import { CommonModel } from '@/pages/login/common/CommonModel';
import LoginPage from '../model/LoginPage';
// 服务层
export default class Service extends CommonService {
    private dataAccess: DataAccess;
    constructor(model: CommonModel<LoginPage>) {
      super();
      this.dataAccess = new DataAccess(model);
    }

}
