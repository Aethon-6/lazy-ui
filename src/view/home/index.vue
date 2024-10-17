<template>
    <div class="container">
        {{ userInfoStore.UserInfo.name }}
        <el-button type="primary" @click="doLogin()">Primary</el-button>
        <el-button type="primary" @click="userList()">用户列表</el-button>
    </div>
</template>
<script lang="ts" setup>
import { login } from '@/apis/api/login'
import useUserInfo from '@/stores/modules/UserInfo';
import { UserList } from '@/apis/api/user';

const doLogin = () => {
    login({ loginname: 'admin', password: '111111', code: '111111' })
        .then((res: { data: any; }) => {
            console.log(res)
        })
        .catch((err: any) => {
            console.log(err)
        })
}
const userList = () => {
    UserList({ pageNum: 0, pageSize: 10, userName: "" })
        .then((res: { data: any }) => {
            console.log(res)
        }).catch((err: any) => {
            console.log(err)
        })
}

const userInfoStore = useUserInfo()
</script>