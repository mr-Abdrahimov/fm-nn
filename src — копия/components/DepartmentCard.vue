<template>
  <div class="department-card" @click="toggleActive" :class="cardClass">
    <div class="dp-m">
    <template v-if="!isActive">
      <div class="col-people">
        <span>{{count}}</span>
        <span class="chel">Чел.</span>
      </div>
      <div class="department-content col-md-12">
        <div class="d-flex justify-content-between align-items-end">
          <div>
            <div class="name" v-html="name"></div>
          </div>
        </div>
      </div>
      <div>
        <div class="top-line">
          <div class="otherText">
          <div class="txt">Подробнее</div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
        <div style="border-right: 1px solid #F4F6F8" class="col-md-4 fl padding-none">
          <div class="department-content">
            <div class="name active" v-html="name">
            </div>
          </div>
          <department-info
                  :rep-text="rep"
            :department-id="id"
            is-department
          />
        </div>
        <div class="col-md-8 fl">
          <div class="row mb-2">
            <department-staff
              v-for="(item, i) in staff"
              v-bind="item"
              :key="i"
              :department-id="id"
            />
          </div>
        </div>
    </template>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import DepartmentChart from './DepartmentChart'
import DepartmentStaff from './DepartmentStaff'
import PowerChart from './PowerChart'
import StaffCard from './StaffCard'
import DepartmentInfo from './DepartmentInfo'

export default {
  name: 'DepartmentCard',
  components: { DepartmentChart, DepartmentStaff, PowerChart, StaffCard, DepartmentInfo },
  data: () => ({
    isActive: false,
  }),
  props: {
    id: {
      type: Number,
      default: null
    },
    keyId: {
      type: Number,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    count: {
      type: Number,
      default: null
    },
    rep: {
      type: String,
      default: null
    },
    staff: {
      type: Array,
      default: () => ([])
    },
    power: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    cardStyle() {
      return {
        width: !this.isActive ? '320px' : '100%'
      }
    },
    cardClass() {
      return !this.isActive ? 'col-md-4' : 'col-md-12'
    },
    supervisor() {
      return this.staff.find(_ => _.isSupervisor)
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
      if(this.isActive) {
        this.scrollUp('.department-card:nth-child('+(this.keyId+1)+')')
      }
    },
    scrollUp(position) {
      this.$scrollTo(position, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
  .department-card {
    transition: all 0.3s ease;
    padding-top: 10px;

    .department-content {
      padding-left: 20px;
      padding-right: 40px;
      padding-bottom: 10px;
    }
    .col-people {
      width: 40px;
      height: 55px;
      background: rgba(55, 66, 89, 0.03);
      border-radius: 0 12px 0 12px;
      position: absolute;
      padding: 10px;
      right: 15px;
      top: 10px;
      text-align: center;

      span {
        font-style: normal;
        font-weight: bold;
        display: block;
      }
      span:nth-child(1) {
        font-size: 18px;
        color: #374259;
      }
      .chel {
        font-size: 9px;
        color: rgba(55, 66, 89, 0.5);
      }
    }
    .top-line {
      border-top: 1px solid rgba(55, 66, 89, 0.05);
    }
    .otherText {
      padding: 10px 20px;
      float: left;
      color: #007BFF;
      width: 140px;
    }
    .otherText:hover {
      color: #FFFFFF;
      background-color: #007BFF;
      transition: all 0.3s ease;
    }
    .otherText .txt:before {
      content: '';
      position: absolute;
      background-image: url("../assets/images/arrow-r.svg");
      width: 13px;
      height: 8px;
      margin-top: 7px;
      margin-left: 80px;
    }
    .otherText:hover>.txt:before {
      transition: all 0.3s ease;
      background-image: url("../assets/images/arrow-r-white.svg");
    }

    .dp-m {
      overflow: hidden;
      padding-top: 10px;
      border-radius: 12px;
      cursor: pointer;
      background: linear-gradient(0deg, #FFFFFF, #FFFFFF), rgba(181, 226, 79, 0.05);
      box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.02), 0px 4px 20px rgba(0, 0, 0, 0.05);
    }

    .fl {
      float: left;
    }
    .padding-none {
      padding: 0;
    }

    .position {
      color: #BABFCD;
    }

    .name {
      padding-top: 5px;
      font-size: 18px;
      font-weight: 600;
      color: #374259;
      transition: all 0.3s ease;

      &.active {
        font-size: 18px;
        transition: all 0.3s ease;
      }
    }

    .format {
      font-size: 13px;
      background: #E9F6CA;
      border-radius: 20px;
      padding: 3px 10px;
    }

    .guidance {
      font-size: 13px;
      background: #FCF1CA;
      border-radius: 20px;
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
