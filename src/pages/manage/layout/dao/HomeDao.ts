import { CommonModel } from '@/pages/manage/common/CommonModel';
import { CommonDao } from '@/pages/manage/common/CommonDao';
import HomePage from '../model/HomePage';

// 数据操作层
export class DataAccess extends CommonDao {
    private model: CommonModel<HomePage>;
    constructor(model: CommonModel<HomePage>) {
        super(model.$store);
        this.model = model;
    }

    public toggleSideBar(): void {
        if (this.model.page) {
            this.model.page.sideWidth = this.model.page.sideWidth === 65 ? 200 : 65;
        }

    }

}
