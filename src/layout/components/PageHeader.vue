<template>
    <div class="header-cont">
        <div>
            <h1>
                <router-link to="/">
                    RealWorld
                </router-link>
            </h1>
        </div>
        <div>
            <template v-if=userStore.isLogin>
                <el-dropdown trigger="click" @command="handleCommand">
                    <div>
                        {{ userStore.userName }}
                        <el-icon>
                            <caret-bottom />
                        </el-icon>
                    </div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="toPersonal">个人信息</el-dropdown-item>
                            <el-dropdown-item command="toLogout">Logout</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </template>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia';
import { useUserStore } from "@/store/modules/user/index"
const userStore = useUserStore();

const commands = ({
    toPersonal: () => {
        console.log('toPersonal')
    },
    toLogout: () => {
        console.log('toLogout')
        userStore.logout()
    }
});
function handleCommand(command) {
    commands[command] && commands[command]();
}
</script>
<style lang="scss">
.header-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 100%;

    a {
        color: inherit;
        text-decoration: none;
    }

    h1 {
        margin: 0;
        font-size: 20px;
    }
}
</style>