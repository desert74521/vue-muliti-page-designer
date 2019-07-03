import { DataAccess } from '../dao/PersonDao';
import PersonPage from '../model/PersonPage';
import { BaseService } from '@/platform';
// 服务层
export default class Service extends BaseService {
    private dataAccess: DataAccess;
    constructor(model: PersonPage) {
      super();
      this.dataAccess = new DataAccess(model);
    }

    public async requireAndRenderDataByPageNo(pageNo: number): Promise<any> {
      await this.dataAccess.requiredDataPageDataByPageNp(pageNo);
    }
}

