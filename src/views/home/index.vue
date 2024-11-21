<template>
    <div>
        {{ userName }}
        this is home page
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from "@/store/modules/user/index"

const userStore = useUserStore();

const userName = userStore.userName;
</script>