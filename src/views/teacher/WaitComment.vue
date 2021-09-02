<template>
  <div class="waitComment">
    <!-- 团队图片点赞 -->
    <team-fab-list/>
    <!-- 项目分类 -->
    <project-list/>
  </div>
</template>

<script>
import ProjectList from '@/components/project/ProjectList'
import teamFabList from '@/components/team/teamFabList'
export default {
  components:{teamFabList,ProjectList}
}
</script>

<style scoped>

</style>