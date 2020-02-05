<template>
  <div class="report">
    <div style="background: #000; padding: 15px;">
      <div class="container d-flex justify-content-between">
        <div>
          <router-link to="/">
            <img src="https://formatmind.com/wp-content/uploads/2019/09/MF_logo-123.png" width="140px" />
          </router-link>
        </div>
        <div>
          <img src="https://units.bz/img/logo.png" width="90px" />
        </div>
      </div>
    </div>
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-4">
          <staff-card
            v-if="staff"
            v-bind="staff"
            :with-report-link="false"
          />
        </div>
        <div class="col-md-8">
          <component
            v-bind:is="report"
            :staff="staff"
          />

          <div v-if="staff.comment" v-html="staff.comment" class="result"/>

        </div>
      </div>
    </div>
    <div style="background: #000; padding: 15px; margin-top: 50px">
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import StaffCard from '../components/StaffCard'
import DATA from '../data';
import Report0 from '../reports/0';
import Report1 from '../reports/1';
import Report2 from '../reports/2';
import Report3 from '../reports/3';
import Report4 from '../reports/4';
import Report5 from '../reports/5';
import Report6 from '../reports/6';
import Report7 from '../reports/7';
import Report8 from '../reports/8';
import Report9 from '../reports/9';
import Report10 from '../reports/10';
import Report11 from '../reports/11';
import Report12 from '../reports/12';
import Report13 from '../reports/13';
import Report14 from '../reports/14';
import Report15 from '../reports/15';
import Report16 from '../reports/16';
import Report17 from '../reports/17';
import Report18 from '../reports/18';
import Report19 from '../reports/19';
import Report20 from '../reports/20';
import Report21 from '../reports/21';
import Report22 from '../reports/22';
import Report23 from '../reports/23';
import Report24 from '../reports/24';
import Report25 from '../reports/25';
import Report26 from '../reports/26';

const REPORTS = [
  Report0,
  Report1,
  Report2,
  Report3,
  Report4,
  Report5,
  Report6,
  Report7,
  Report8,
  Report9,
  Report10,
  Report11,
  Report12,
  Report13,
  Report14,
  Report15,
  Report16,
  Report17,
  Report18,
  Report19,
  Report20,
  Report21,
  Report22,
  Report23,
  Report24,
  Report25,
  Report26
]

export default {
  name: 'ReportView',
  components: { StaffCard },
  props: {
    departmentId: {
      type: [String, Number],
      default: null,
    },
    staffId: {
      type: [String, Number],
      default: null,
    },
    headId: {
      type: [String, Number],
      default: null,
    }
  },
  created: function () {
    this.scrollUp()
  },
  methods: {
    scrollUp() {
      let options = {
        onCancel: function() {
        }
      }
      this.$scrollTo(this, 300, options);
    }
  },
  computed: {
    staff() {
      if (!this.headId) {
        const department = DATA.departments.find(_ => +_.id === +this.departmentId);
        return department.staff.find(_ => +_.id === +this.staffId);
      } else {
        let staff = DATA.management.find(_ => +_.id === +this.headId);

        if (!staff) {
          staff = DATA.head.find(_ => +_.id === +this.headId);
        }

        return staff;
      }
    },
    report() {
      return REPORTS[this.staff.formatId];
    }
  }
}
</script>

<style>
  .result {
    background: #F4F6F8;
    padding: 15px;
    border-radius: 12px;
  }
</style>
