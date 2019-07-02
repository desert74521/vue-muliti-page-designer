import { DataAccess } from '../dao/HomeDao';
import { CommonService } from '@/pages/manage/common/CommonService';
import { CommonModel } from '@/pages/manage/common/CommonModel';
import HomePage from '../model/HomePage';
// 服务层
export default class Service extends CommonService {
    private dataAccess: DataAccess;
    constructor(model: CommonModel<HomePage>) {
      super();
      // 注入model
      this.dataAccess = new DataAccess(model);
    }

    public toggleSideBar(): void {
        this.dataAccess.toggleSideBar();
    }

}
