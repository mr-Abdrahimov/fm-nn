<template>
  <div
    class="department-info"
    @click="onClick"
    :class="{ department: isDepartment}"
  >
    <div class="box-sc" :class="{ noneShadow: isDepartment}">
      <div class="header pb-2">
        <div class="d-flex justify-content-between align-items-center">
          <div v-html="repText">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */

import PowerChart from './PowerChart'

export default {
  name: 'DepartmentInfo',
  components: { PowerChart },
  props: {
    id: {
      type: Number,
      default: null
    },
    repText: {
      type: String,
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
    isDepartment: {
      type: Boolean,
      default: false
    },
    power: {
      type: Object,
      default: () => ({})
    },
    activeItem: {
      type: Number,
      default: null
    },
    withReportLink: {
      type: Boolean,
      default: true
    },
    isSupervisor: {
      type: Boolean,
      default: false
    },
    departmentId: {
      type: Number,
      default: null
    }
  },
  computed: {
    isActive () {
      return +this.activeItem === +this.id
    },
    color () {
      const { nkf } = this.power
      if (nkf < 60) {
        return '#B5E24F'
      }
      if (nkf > 60) {
        return '#F7D250'
      }
    },
    styleHeader () {
      const { color } = this
      return {
        'border-bottom': `2px solid ${color}`
      }
    },
    stylePower () {
      const { color } = this
      return {
        'background-color': color
      }
    }
  },
  methods: {
    onClick () {
      const { index, id } = this
      this.$emit('click', { index, id })
    },
    toReport() {
      if (this.isSupervisor) {
        this.$router.push({
          name: 'report-staff',
          params: {
            departmentId: this.departmentId,
            staffId: this.id
          }
        })
      } else {
        this.$router.push({
          name: 'report-head',
          params: {
            headId: this.id
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .buttonReport {
    color: #007bff;
  }

  .box-sc {
    cursor: pointer;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), rgba(181, 226, 79, 0.05);
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.02), 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding-bottom: 15px;
    padding-left: 0;
    padding-right: 0;

    &.active {
      border: 1px solid #B3B7FA;
    }

    &.department {
      box-shadow: none !important;
    }
    &.noneShadow {
      box-shadow: none !important;
    }

    .header {
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 10px;

      .position {
        color: #BABFCD;
        padding-top: 10px;
      }

      .name {
        padding-top: 5px;
        font-size: 22px;
        font-weight: 600;
        color: #374259;
      }
    }

    .content {
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 10px;
    }

    .format {
      background: #E9F6CA;
      font-size: 13px;
      padding: 3px 10px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    .guidance {
      font-size: 13px;
      background: #B5E24F;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      color: #374259;
      padding: 3px 10px;
    }


    .ellipse {
      width: 56px;
      height: 56px;
      background-image: url('../assets/images/ellipse.svg');
      background-repeat: no-repeat;
    }

  }
</style>
