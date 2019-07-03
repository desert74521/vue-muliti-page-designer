import { CommonModel } from '@/pages/login/common/CommonModel';
import { CommonDao } from '@/pages/login/common/CommonDao';
import LoginPage from '../model/LoginPage';

// 数据操作层
export class DataAccess extends CommonDao {
    private model: CommonModel<LoginPage>;
    constructor(model: CommonModel<LoginPage>) {
        super(model.$store, model.$message);
        this.model = model;
    }



}
