<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import NavBar from '@/components/generic/NavBar.vue'

export default {
  name: 'MainLayout',

  components: { NavBar }
}
</script>
