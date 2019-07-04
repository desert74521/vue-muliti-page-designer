import { DataAccess } from '../dao/LoginDao';
import { CommonService } from '@/pages/login/common/CommonService';
import { CommonModel } from '@/pages/login/common/CommonModel';
import LoginBox from '../model/LoginBox';
// 服务层
export default class Service extends CommonService {
    private dataAccess: DataAccess;
    constructor(model: CommonModel<LoginBox>) {
      super();
      this.dataAccess = new DataAccess(model);
    }

    public login(): void {
      this.dataAccess.changeUrl('/manage.html');
    }

}
