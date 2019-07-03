import api from '../api/PersonApi';
import PersonPage from '../model/PersonPage';
import { BaseDao } from '@/platform';

// 数据操作层
export class DataAccess extends BaseDao {
    private model: PersonPage;
    constructor(model: PersonPage) {
        super();
        this.model = model;
    }

    public async requiredDataPageDataByPageNp(pageNo: number): Promise<any> {
        this.model.persons = await api.get('', pageNo, this.model.pageSize);
    }
}
