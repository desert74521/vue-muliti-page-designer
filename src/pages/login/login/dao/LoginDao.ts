import { CommonModel } from '@/pages/login/common/CommonModel';
import { CommonDao } from '@/pages/login/common/CommonDao';
import LoginBox from '../model/LoginBox';

// 数据操作层
export class DataAccess extends CommonDao {
    private model: CommonModel<LoginBox>;
    constructor(model: CommonModel<LoginBox>) {
        super(model.$store, model.$message);
        this.model = model;
    }

}
