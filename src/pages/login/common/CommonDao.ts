import { BaseDao } from '@/platform';

// 项目级别的通用数据处理
export class CommonDao extends BaseDao {
    public $store: any;
    public $message?: any;
    constructor($store: any, $message: any) {
        super();
        this.$store = $store;
        this.$message = $message;
    }
}
