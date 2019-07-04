
import UserInfo from '../model/UserInfo';
import { BaseDao } from '@/platform';

// 数据操作层
export class DataAccess extends BaseDao {
    private model: UserInfo;
    constructor(model: UserInfo) {
        super();
        this.model = model;
    }

    public initUserInfo(): void {
        const sessionStorage: any = this.getSessionStorage();
        this.model.userName = sessionStorage.getItem('userName') || 'unknown';
    }

}
