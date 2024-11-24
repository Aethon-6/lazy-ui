<template>
    <div>
        {{ userName }}
        this is home page

        <el-button type="primary" size="large" @click.prevent="handleLogout">退出</el-button>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from "@/store/modules/user/index"

const userStore = useUserStore();

const userName = userStore.userName;

const handleLogout = () => {
    userStore.logout()
}
</script>