<template>
    <TheHeader></TheHeader>
    
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-sm-3 d-none d-sm-flex">
                <a-list bordered style="width: 100%">
                    <template #header>
                        <div><MenuOutlined class="me-1"/>BẢNG ĐIỀU KHIỂN</div>
                    </template>
                    <TheMenu></TheMenu>
                </a-list>
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
import TheMenu from '../components/TheMenu.vue';
import { MenuOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        TheHeader,
        TheMenu,
        MenuOutlined
    }
}
</script>