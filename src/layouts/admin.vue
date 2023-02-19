<template>
    <TheHeader></TheHeader>
    
    <div class="container-fuild">
        <div class="row">
            <div class="col-sm-3">
                SIDER BAR
            </div>
            <div class="col-sm-9">
                
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'

export default {
    components: {
        TheHeader
    }
}
</script>