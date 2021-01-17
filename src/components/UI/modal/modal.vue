<template>
  <transition name="modal">
    <div class="modal" @click="$emit('close')">

      <div class="modal__wrapper" @click.stop>

        <div class="modal__header">

          <h4 class="modal__title"> 
            {{ title }}
          </h4>

          <button class="button button--close" @click="$emit('close')">×</button>

        </div>
        <!-- /modal__header -->

        <slot name="body">Error during loading of form.</slot>

        <div class="modal__footer">
          <button class="modal__switch" @click="$emit('replace')">
            <slot name="footer"></slot>
          </button>
        </div>

      </div>
      <!-- /modal__wrapper -->
    </div>
    <!-- /modal -->
  </transition>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    },
  },
  mounted() {
    document.body.addEventListener('keyup', e => {
      if (e.keyCode === 27) this.$emit('close')
    })
  },
}
</script>

<style lang="scss" scoped>
// Animation
.modal-enter {
  opacity: 0
}
.modal-leave-active {
  opacity: 0
}
.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2)
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity .2s ease;
  z-index: 998;
  background-color: rgba(00,00,00,.48);

  &__wrapper {
    position: relative;
    max-width: 600px;
    padding: 20px 18px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    transition: all .2s ease;
    border-radius: 8px;
    z-index: 999;
    overflow: hidden;
    @media screen and (min-width: 900px) {
      min-width: 500px;
    }
  }

  &__header {
    display: flex;
    align-self: center;
    justify-content: space-between;
    padding-bottom: 20px;
    
  }

  &__title{
    font-size: 24px;
  }

  &__body {
    text-align: center;
  }

  &__footer { text-align: center; }

  &__switch {
    background-color: transparent;

    cursor: pointer;

    font-size: 16px;
    line-height: 10px;
    text-align: center;

    &::after {
      content: '';

      display: inline-block;

      width: 0;
      height: 1px;
      background: black;

      transition: .2s all;
    }

    &:hover, &:focus {
      &::after { width: 100%; }
    }

    
  }
}

</style>
