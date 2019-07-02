import { CommonModel } from '@/pages/manage/common/CommonModel';
import { CommonDao } from '@/pages/manage/common/CommonDao';
import api from '../api/PersonApi';
import PersonPage from '../model/PersonPage';

// 数据操作层
export class DataAccess extends CommonDao {
    private model: CommonModel<PersonPage> = new CommonModel<PersonPage>();
    constructor(model: CommonModel<PersonPage>) {
        super(model.$store);
        this.model = model;
    }

    public async requiredDataPageDataByPageNp(pageNo: number): Promise<any> {
        if (this.model.page) {
            this.model.page.persons = await api.get('', pageNo, this.model.page.pageSize);
        } else {
            throw new Error('error');
        }
    }
}
