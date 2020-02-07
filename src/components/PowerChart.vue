<template>
  <div v-if="now && future" class="power-chart">
    <div class="label d-flex justify-content-between align-items-center mb-2">
      <div class="pl-2">0%</div>
      <div></div>
      <div class="flex-fill mx-2"></div>
      <div>50%</div>
      <div class="flex-fill mx-2"></div>
      <div class="pr-2">100%</div>
    </div>
    <div class="progress">
      <div class="progress-bar" :content="`Текущая эффективность (ЭФФ) - Это процент соответствия Формата должности и Формата Мышления человека. Данный показатель также учитывает загруженность другими задачами.`" v-tippy role="progressbar" :style="nowStyle" :aria-valuenow="now" aria-valuemin="0" aria-valuemax="100">{{ now }}%</div>
      <div class="progress-bar" :content="`Потенциальная эффективность (ПЭФФ) - Это процент роста эффективности при условии снижения нагрузки другими задачами (не своими) до 0 %.`" v-tippy role="progressbar" :style="futureStyle" :aria-valuenow="value" aria-valuemin="0" aria-valuemax="100">{{ future }}%</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'PowerChart',
  props: {
    now: {
      type: Number,
      default: null
    },
    future: {
      type: Number,
      default: null
    },
  },
  computed: {
    value() {
      return this.future - this.now;
    },
    nowStyle() {
      const style = {
        width: `${this.now}%`,
      }

      const { now } = this;

      if (now < 16) {
        style.background = '#9E1D1D'
        style.color = '#FFFFFF'
      }

      if (now > 16 && now < 25) {
        style.background = '#EC3232'
        style.color = '#FFFFFF'
      }

      if (now > 25) {
        style.background = '#F7D250'
        style.color = '#FFFFFF'
      }

      return style;
    },
    futureStyle() {
      const style = {
        width: `${this.value}%`,
      }

      const { future } = this;

      if (future < 30) {
        style.background = '#F5A798'
        style.color = '#FFFFFF'
      }

      if (future > 30 && future < 45) {
        style.background = '#FBE8A7'
        style.color = '#374259'
      }

      if (future > 45) {
        style.background = '#B5E24F'
        style.color = '#FFFFFF'
      }

      return style;
    }
  },
}
</script>

<style lang="scss">
  .label {
    font-size: 12px;
    color: #D9E1E9;

    .flex-fill {
      height: 1px;
      border-bottom: 1px solid #F4F6F8;
    }
  }
  .progress {
    height: 30px !important;
    border-radius: 0px !important;
    background: #D9E1E9 !important;
  }
</style>
