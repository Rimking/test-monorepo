<script setup lang="js">
import { getUser } from "@rimking/api"
import RimButton from "@rimking/components"

console.log("getUser",getUser)
getUser().then(res => {
  console.log("res",res)
})
</script>

<template>
  <div>
    这是一个v3的项目
    <RimButton/>
  </div>
</template>

<style scoped>

</style>
