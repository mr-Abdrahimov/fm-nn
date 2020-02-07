<template>
  <div class="department-chart">
    <div>
      <div v-if="green.length" style="height: 12px">
        <template v-if="green.length < 6">
          <span class="dot green" v-for="(item, i) in green" :key="i"/>
        </template>
        <template v-else>
          <span class="dot green" v-for="(item, i) in take(green)" :key="i"/> <span class="plus">{{ green.length }}+</span>
        </template>
      </div>
      <div v-if="yellow.length" style="height: 12px">
        <template v-if="yellow.length < 6">
          <span class="dot yellow" v-for="(item, i) in yellow" :key="i"/>
        </template>
        <template v-else>
          <span class="dot yellow" v-for="(item, i) in take(yellow)" :key="i"/> <span class="plus">{{ yellow.length }}+</span>
        </template>
      </div>
      <div v-if="red.length" style="height: 12px">
        <template v-if="red.length < 6">
          <span class="dot red" v-for="(item, i) in red" :key="i"/>
        </template>
        <template v-else>
          <span class="dot red" v-for="(item, i) in take(red)" :key="i"/> <span class="plus">{{ red.length }}+</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import take from 'lodash/take'

export default {
  name: 'DepartmentChart',
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    red () {
      return this.data.filter(_ => _.power.future < 10)
    },
    yellow () {
      return this.data.filter(_ => _.power.future > 10 && _.power.future < 40)
    },
    green () {
      return this.data.filter(_ => _.power.future > 40)
    }
  },
  methods: {
    take (value) {
      return take(value, 6)
    }
  }
}
</script>

<style lang="scss" scoped>
  .dot {
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 8px;
    display: inline-block;
    margin-right: 2px;

    &.red {
      background: #EC3232;
    }

    &.yellow {
      background: #F7D250;
    }

    &.green {
      background: #B5E24F;
    }
  }

  .plus {
    font-size: 12px;
  }
</style>
