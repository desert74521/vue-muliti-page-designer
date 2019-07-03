import { CommonModel } from '@/pages/manage/common/CommonModel';
import { CommonDao } from '@/pages/manage/common/CommonDao';
import LoginPage from '../model/LoginPage';

// 数据操作层
export class DataAccess extends CommonDao {
    private model: CommonModel<LoginPage>;
    constructor(model: CommonModel<LoginPage>) {
        super(model.$store, model.$message);
        this.model = model;
    }



}
