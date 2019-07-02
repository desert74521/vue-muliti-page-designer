import { BaseDao } from '@/platform';

// 项目级别的通用数据处理
export class CommonDao extends BaseDao {
    private $store: any;
    constructor($store: any) {
        super();
        this.$store = $store;
    }

    public closeMask() {
        this.$store.commit('app/HIDE_MASK');
    }

    public openMask() {
        this.$store.commit('app/SHOW_MASK');
    }

}
