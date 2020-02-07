<template>
  <div class="welcome">
    <div style="background: #000; padding: 15px;">
      <div class="container d-flex justify-content-between">
        <div>
          <img src="https://formatmind.com/wp-content/uploads/2019/09/MF_logo-123.png" width="140px" />
        </div>
        <div>
          <img src="https://units.bz/img/logo.png" width="90px" />
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <h2 class="col-10 mt-3 s48">
          Отчет по Юнитам
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6 mt-5">
          <h4 class="mb-4-5">Форматы мышления по объему информации:</h4>
          <div class="block-format">
            <div class="block-title">
              <img src="../assets/images/i-format.svg"/> Я-Формат
            </div>
            <div class="text">Люди этого формата хорошо понимают, что происходит <b>здесь и сейчас</b>, отлично планируют на ближайшее будущее <b>(на срок до одного года)</b>. Основная мотивация и ориентация Я-форматных личностей - личная реализация и ресурсность. Это именно тот формат, который создает нашу реальность в данный момент.</div>
          </div>
          <div class="block-format">
            <div class="block-title">
              <img src="../assets/images/we-format.svg"/> Мы-Формат
            </div>
            <div class="text">
              Люди этого формата идеальны для участия в социальных проектах, в событиях, в которых задействована <b>система, коммуникация, команда</b>. Им интересны “многослойные” проекты, в которых видна перспектива, несколько векторов развития. Люди этого формата могут эффективно планировать <b>на срок до 2-3 лет</b>.
            </div>
          </div>
          <div class="block-format">
            <div class="block-title">
              <img src="../assets/images/world-format.svg"/> Мир-Формат
            </div>
            <div class="text">
              Люди этого формата  увлекаются мыслями <b>о глобальном</b>, о мироустройстве,
              о создании некого единого информационного поля, которое  работает по определенным принципам и законам.
              Люди этого формата подходят <b>к своей деятельности с большим размахом</b>. Они могут эффективно осуществлять планирование <b>на срок от пяти лет и более</b>.
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <h4 class="mb-4-5">Форматы мышления по структуре информации:</h4>
          <div class="block-format">
            <div class="block-title green">
              <img src="../assets/images/block-sys.svg"/> Системщик
            </div>
            <div class="text">
              Человек, который все приводит к единой структуре и придерживается выбранного сценария.
            </div>
          </div>
          <div class="block-format">
            <div class="block-title purple">
              <img src="../assets/images/block-met.svg"/> Метафорщик
            </div>
            <div class="text">
              Человек, который способен интуитивно усовершенствовать систему новыми идеями, улучшить.
            </div>
          </div>
          <div class="block-format">
            <div class="block-title red">
              <img src="../assets/images/block-pre.svg"/> Презентатор
            </div>
            <div class="text">
              Человек, который представляет, демонстрирует, завлекает людей своей деятельностью. (Активно, быстро, импульсивно).
            </div>
          </div>
          <div class="block-format">
            <div class="block-title blue">
              <img src="../assets/images/block-ana.svg"/> Аналитик
            </div>
            <div class="text">
              Люди, которые занимаются исследованием различных вариантов развития определенной деятельности.
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mt-5">
          <div>
            <h4>Формат Мышления</h4>
            <p>Это показатель, характеризующий каким образом человек работает с информацией, в какой скорости, какая структура мышления ему свойственна.</p>
          </div>
          <div class="">
            <h4>Наведённость</h4>
            <p>Это процент задач,  не свойственных мышлению человека. Высокая наведённость (более 60 %)  приводит к эмоциональному выгоранию, а также к снижению эффективности в работе. Показатель наведённости ниже 60 % говорит о том, что человек в целом находится в своем комфортном поле деятельности.</p>
          </div>
        </div>
        <div class="col-md-6 mt-5">
          <div class="">
            <h4>Текущая эффективность (ЭФФ)</h4>
            <p>Это процент соответствия Формата должности и Формата Мышления человека. Данный показатель также учитывает загруженность другими задачами.</p>
          </div>
          <div class="">
            <h4>Потенциальная эффективность (ПЭФФ) </h4>
            <p>Это процент роста эффективности при условии снижения нагрузки другими задачами (не своими) до 0 %. </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row mb-5 mt-3">
        <staff-card
          v-for="(item, i) in head"
          v-bind="item"
          ref="heads"
          :key="i"
          :index="i"
          :active-item="activeHeadId"
          class="my-2 col-md-4"
          @click="onClickHead"
        />
      </div>
    </div>

    <div v-if="management.length" style="position: relative">

      <div class="assistants" :style="assistantsStyles">
        <div class="container" style="overflow-x: scroll;" >
          <VuePerfectScrollbar v-once :settings="{maxScrollbarLength: 150, handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'], wheelSpeed: 0}" @ps-scroll-y="scrollHandle" v-dragscroll>
          <div ref="wrap" class="row">
            <transition-group name="list" tag="div" class="d-flex">
              <staff-card
                v-for="(item, i) in management"
                v-bind="item"
                ref="cards"
                :key="i"
                :index="i"
                :active-item="activeManagerId"
                class="assistants-block mt-4 mb-4"
                @click="onClickManager"
              />
            </transition-group>
          </div>
          </VuePerfectScrollbar>
        </div>
      </div>
    </div>

    <div v-if="activeManagerId" class="container mt-5">
      <div v-if="departments.length">
        <transition-group name="list" tag="div" class="row">
          <department-card
            v-for="(item, i) in departments"
            v-bind="item"
            :key="i"
            :key-id="i"
            class="mb-3"
          />
        </transition-group>
      </div>
      <div v-else-if="activeManagerId">
        Нет отделов
      </div>
    </div>

    <div style="background: #000; padding: 15px; margin-top: 50px">
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import StaffCard from '../components/StaffCard'
import DepartmentCard from '../components/DepartmentCard'
import DATA from '../data';
import ClickOutside from 'vue-click-outside'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'WelcomeView',
  components: { StaffCard, DepartmentCard, VuePerfectScrollbar },
  directives: {
    ClickOutside
  },
  data: () => ({
    activeHeadId: DATA.head[0].id,
    activeManagerId: DATA.management[0].id,
    isActive: false,
    bottomArrowPosition: 325,
    upArrowPosition: 325,
  }),
  computed: {
    head () {
      return DATA.head;
    },
    management () {
      return DATA.management;
    },
    departments() {
      return DATA.departments;
    },
    assistantsStyles() {
      return {
        height: `${this.activeHeadId ? '' : 0}px`,
        opacity: this.activeHeadId ? 100 : 0
      }
    },
  },
  methods: {
    onClickHead({ index, id}) {
      this.activeHeadId = id;

      if (this.management.length) {
        this.activeManagerId = this.management[0].id;

        if (this.$refs.wrap) {
          const head = this.$refs.heads[index]
          const offset = this.$refs.wrap.getBoundingClientRect().left;
          this.activeManagerId = this.management[0].id;
          this.upArrowPosition = head.$el.offsetLeft - 20 + offset;
        }
      } else {
        this.activeManagerId = null;
      }

    },
    onClickManager({ index, id }) {
      this.activeManagerId = id;
      const card = this.$refs.cards[index]
      const offset = this.$refs.wrap.getBoundingClientRect().left;
      this.bottomArrowPosition = card.$el.offsetLeft - 20 + offset;
    },
    scrollHandle(evt) {
      console.log(evt)
    },
  }
}
</script>

<style>
  ::-webkit-scrollbar { display:none; }

  .container {
    color: #374259;
  }

  .assistants-block {
    min-width: 320px;
    margin: 2ex;
  }

  .assistants {
    background: #F4F6F8;
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;
  }

  .bottom-arrow {
    position: absolute;
    bottom: -30px;
    transform: rotate(180deg);
    transition: all 0.3s ease;
    z-index: 999;
  }

  .up-arrow {
    position: absolute;
    top: -30px;
    transition: all 0.3s ease;
    z-index: 999;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }

  .welcome {
  }

  .block-format {
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    margin-top: 25px;
  }
  .block-format .block-title {
    background: rgba(217, 225, 233, 0.2);
    border-radius: 10px 0;
    padding: 13px 30px;
    display: block;
    float: left;

    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;

    color: #374259;
  }
  .block-format .block-title img {
    margin-right: 10px;
  }
  .block-format .text {
    padding: 25px;
    display: inline-block;
  }
  h4 {

    font-style: normal!important;
    font-weight: bold!important;
    line-height: 38px;
    color: #374259;
  }
  .block-format .green {
    background: rgba(181, 226, 79, 0.1);
    color: #486700;
  }
  .block-format .purple {
    background: rgba(104, 112, 246, 0.1);
    color: #000561;
  }
  .block-format .red {
    background: rgba(236, 50, 50, 0.1);
    color: #550000;
  }
  .block-format .blue {
    background: rgba(86, 193, 232, 0.1);
    color: #005D80;
  }
  .s48 {
    font-size: 3rem;
    font-weight: 100;
  }
  .mb-4-5 {
    margin-bottom: 2.2rem!important;
  }


</style>
