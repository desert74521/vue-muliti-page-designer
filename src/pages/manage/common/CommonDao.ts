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

    public closeMask() {
        this.$store.commit('app/HIDE_MASK');
    }

    public openMask() {
        this.$store.commit('app/SHOW_MASK');
    }

}
