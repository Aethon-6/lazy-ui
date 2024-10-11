<template>
    <div class="container">
        {{ userInfoStore.UserInfo.name }}
        <el-button type="primary" @click="doLogin()">Primary</el-button>
    </div>
</template>
<script lang="ts" setup>
import { login } from '@/apis/api/login'
import useUserInfo from '@/stores/modules/UserInfo';

const doLogin = () => {
    login({ loginname: 'admin', password: '111111', code: '111111' })
        .then((res: { data: any; }) => {
            console.log(res.data)
        })
        .catch((err: any) => {
            console.log(err)
        })
}

const userInfoStore = useUserInfo()
</script>