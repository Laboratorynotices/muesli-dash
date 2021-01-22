<template>
  <transition name="fade">
    <a
      class="scroll-to-top rounded"
      @click="scrollTop"
      v-show="visible"
    >
      <b-icon-chevron-up />
    </a>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      // Показывать ли кнопку промотки наверх на страницах
      visible: this.isVisible()
    }
  },
  methods: {
    // Определяет показывать ли кнопку или нет
    isVisible: () => {
      return (window.scrollY > 100)
    },
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 20)
      }, 50)
    },
    // "Слушает" бегунок и определяет показывать ли кнопку перемотки наверх или нет.
    scrollListener: function (e) {
      this.visible = this.isVisible()
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style scoped>
/* Анимация для всплытия и скрытия кнопки */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
