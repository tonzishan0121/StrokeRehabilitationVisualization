<template>
  <div id="app">
    <router-view />
    
    <!-- 左侧导航按钮：主界面 -->
    <nav style="position: fixed; bottom: 0; left: 0; padding: 10px;">
      <RouterLink 
        :to="{ path: '/index', query: $route.query }" 
        v-if="$route.path !== '/index'"
      >
        <button class="blue-btn">主界面</button>
      </RouterLink>
    </nav>
    
    <!-- 右侧导航按钮：临床路径和并发症预测 -->
    <nav style="position: fixed; bottom: 0; right: 0; padding: 10px;">
      <RouterLink 
        :to="{ path: '/graph', query: $route.query }" 
        v-if="$route.path !== '/graph'"
      >
        <button class="blue-btn">临床路径</button>
      </RouterLink>
      <RouterLink 
        :to="{ path: '/eventGraph', query: $route.query }" 
        v-if="$route.path !== '/eventGraph'"
      >
        <button class="blue-btn">并发症预测</button>
      </RouterLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #020308;
  overflow: hidden;
}

/* 新增蓝色风格按钮 */
.blue-btn {
  background: linear-gradient(135deg, #1a6dff 0%, #0d5dd9 100%);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  margin-left: 5px;
}

.blue-btn:hover {
  background: linear-gradient(135deg, #2a7dff 0%, #1d6de9 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>