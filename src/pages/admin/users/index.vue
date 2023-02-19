<template>
    Đây là trang quản lý Users
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
export default {
    setup() {
        const store = useMenu();
        store.onSelectedKeys(['admin-users']);
    }
}
</script>
