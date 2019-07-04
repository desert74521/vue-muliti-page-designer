import { BaseModel } from '.';

// 处理与业务尽量无关的数据问题
export class BaseDao {
    private baseModel: BaseModel = new BaseModel();
    public changeUrl(url: string): void {
        this.baseModel.window.location.href = url;
    }

    public getSessionStorage(): any {
        return this.baseModel.sessionStorage;
    }

    public loginOut(): void {
        this.changeUrl('/login.html');
    }
}

