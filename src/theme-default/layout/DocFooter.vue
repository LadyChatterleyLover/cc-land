<template>
  <footer mt="8">
    <div flex="~" gap="2" divider-top="~" pt="6">
      <div flex="~ col" class="prev">
        <a :href="prevPage.link" class="pagerLink" v-if="prevPage">
          <span class="desc">上一页</span>
          <span class="title">{{ prevPage.text }}</span>
        </a>
      </div>
      <div flex="~ col" class="next">
        <a v-if="nextPage" :href="nextPage.link" class="pagerLink styles.next">
          <span class="desc">下一页</span>
          <span class="title">{{ nextPage.text }}</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { usePrevNextPage } from '../logic/usePrevNextPage'
const { prevPage, nextPage } = usePrevNextPage()
</script>

<style scoped lang="scss">
.prev,
.next {
  width: 50%;
}

.pager-link {
  display: block;
  border: 1px solid var(--island-c-divider-light);
  border-radius: 8px;
  padding: 8px 16px 8px;
  width: 100%;
  height: 100%;
  transition: border-color 0.25s;
}

.pager-link:hover {
  border-color: var(--island-c-brand);
}

.pager-link:hover .title {
  color: var(--island-c-brand-dark);
}

.pager-link.next {
  margin-left: auto;
  text-align: right;
}

.desc {
  display: block;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--island-c-text-2);
}

.title {
  display: block;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--island-c-brand);
  transition: color 0.25s;
}
</style>
