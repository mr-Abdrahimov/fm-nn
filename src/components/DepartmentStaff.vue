<template>
  <div
    class="department-staff col-md-6"
    @click="toReport"
  >
    <div class="margin15" :style="styleStaff">
    <div class="d-flex justify-content-between">
      <div>
        <div>
          <strong>
            {{ name }}
          </strong>
        </div>
        <div style="font-size: 13px; color: #BABFCD">
          {{ format }}
        </div>
      </div>
      <div>
        <span class="now-status" :style="nowStyle"></span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'StaffCard',
  props: {
    id: {
      type: Number,
      default: null
    },
    departmentId: {
      type: Number,
      default: null
    },
    position: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    format: {
      type: String,
      default: null
    },
    index: {
      type: Number,
      default: null
    },
    power: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    nowStyle () {
      const { now } = this.power
      if (now < 30) {
        return {
          background: '#EC3232'
        }
      }

      if (now > 20 && now < 40) {
        return {
          background: '#F7D250'
        }
      }
    },
    color () {
      const { future } = this.power
      if (future <= 20) {
        return '#EC3232'
      }

      if (future > 20 && future <= 40) {
        return '#F7D250'

      }

      if (future > 40) {
        return '#B5E24F'
      }
    },
    styleStaff () {
      return {
        'border-left': `10px solid ${this.color}`
      }
    }
  },
  methods: {
    toReport () {
      const { departmentId } = this
      this.$router.push({
        name: 'report-staff',
        params: {
          departmentId,
          staffId: this.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .department-staff {
  }
  .margin15 {
    margin: 15px;
    background: #F8F9FB;
    border-radius: 8px;
    color: #374259;
    padding: 10px 15px;
  }

  .now-status {
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 10px;
  }
</style>
