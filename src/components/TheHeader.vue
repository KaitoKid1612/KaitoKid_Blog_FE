<template>
    <div class="container-fuild">
        <div class="row text-white" style="background-color: green;padding: 1rem;">
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span class="d-sm-none d-flex" @click="showDrawer()"><MenuOutlined /></span>
            </div>

            <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src="../assets/img/logo.jpg" alt="" height="32" width="34" style="border-radius: 10px;" class="ms-3 me-3">
                <span class="d-none d-sm-flex">QUẢN TRỊ</span>
            </div>

            <div class="col-sm-3 d-none d-sm-flex align-items-sm-center justify-content-sm-end">
                <span class="d-none d-sm-flex"><i class="fa-sharp fa-solid fa-circle-user me-2" style="line-height: normal; font-size: 25px;"></i>Admin</span>
            </div>

            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span class="d-sm-none d-flex" @click="showDrawerUser()"><i class="fa-sharp fa-solid fa-circle-user" style="font-size: 16px;"></i></span>
            </div>
        </div>
    </div>

    <a-drawer
        v-model:visible="visible"
        style="color: red"
        title="DANH MỤC"
        placement="left"
    >
        <TheMenu></TheMenu>
    </a-drawer>

    <a-drawer
        v-model:visible="visible_user"
        style="color: red"
        title="ADMIN"
        placement="right"
    >
    </a-drawer>
</template>

<script>
    import { defineComponent, ref } from 'vue';
    import TheMenu from './TheMenu.vue';
    import { MenuOutlined } from '@ant-design/icons-vue';
    
    export default defineComponent({
    setup() {
        const visible = ref(false);
        const visible_user = ref(false);
        const showDrawer = () => {
            visible.value = true;
        };
        const showDrawerUser = () => {
            visible_user.value = true;
        };
        return { visible, showDrawer, visible_user, showDrawerUser, };
    },
    components: { 
        TheMenu,
        MenuOutlined
    }
});
</script>
