<!-- 来源 @see https://codepen.io/Chokcoco/pen/QWJWqBv -->
<script lang="ts" setup>
const isActive = ref(false)
</script>

<template>
  <div class="center-full-page">
    <div
      class="switch-btn"
      :class="{ active: isActive }"
      @click="isActive = !isActive"
    />
  </div>
</template>

<style scoped>
.switch-btn {
  position: relative;
  width: 300px;
  height: 100px;
  background: #5a81b4;
  border-radius: 50px;
  cursor: pointer;
  box-shadow:
    -1px -4px 5px 0px #333,
    1px 4px 5px 0px #ffe,
    inset 0 3px 5px #333,
    inset 0 -3px 5px #ddd;
  overflow: hidden;
  transition: .5s all;
}
.switch-btn::before,
.switch-btn::after {
  content: '';
  position: absolute;
  transition: .5s all;
}
.switch-btn::before{
  width: 80px;
  height: 80px;
  inset: 10px;
  background-color: #e9cb50;
  border-radius: 50%;
  box-shadow:
    0 0 5px 0px #333,
    inset 2px 3px 5px #ffe,
    inset -2px -3px 5px #333;
  z-index: 1;
}
.switch-btn::after{
  width: 75px;
  height: 75px;
  border-radius: 50%;
  inset: 12.5px;
  box-shadow:
            10px 60px 0 10px #fff,
            65px 60px 0 5px #fff,
            95px 70px 0 10px #fff,
            135px 45px 0 5px #fff,
            200px 35px 0 10px #fff,
            250px -5px 0 10px #fff,
            -10px 0 0 50px rgba(255, 255, 255, .2),
            15px 0 0 50px rgba(255, 255, 255, .15),
            40px 0 0 50px rgba(255, 255, 255, .21),
            10px 40px 0 10px #abc1d9,
            70px 35px 0 10px #abc1d9,
            95px 40px 0 10px #abc1d9,
            135px 20px 0 10px #abc1d9,
            170px 15px 0 10px #abc1d9,
            210px -20px 0 10px #abc1d9;

}

.switch-btn.active {
  background: radial-gradient(circle at 50% 20px, #fff, #fff 6px, transparent 7px, transparent),
            radial-gradient(circle at 35% 45px, #fff, #fff 1px, transparent 2px, transparent),
            radial-gradient(circle at 10% 70px, #fff, #fff 2.5px, transparent 3.5px, transparent),
            radial-gradient(circle at 25% 15px, #fff, #fff 3px, transparent 4px, transparent),
            radial-gradient(circle at 15% 50px, #fff, #fff 1.5px, transparent 2.5px, transparent),
            radial-gradient(circle at 30% 75px, #fff, #fff 5px, transparent 6px, transparent),
            radial-gradient(circle at 5% 30px, #fff, #fff 0.5px, transparent 1.5px, transparent),
            radial-gradient(circle at 25% 60px, #fff, #fff 0.5px, transparent 1.5px, transparent),
            radial-gradient(circle at 7% 35px, #fff, #fff 0.5px, transparent 1.5px, transparent),
            radial-gradient(#2b303e, #2b303e);
}
.switch-btn.active::before{
        transform: translate(200px);
        background:
            radial-gradient(circle at 50% 20px, #939aa5, #939aa5 6.5px, transparent 7px, transparent),
            radial-gradient(circle at 35% 45px, #939aa5, #939aa5 11.5px, transparent 12px, transparent),
            radial-gradient(circle at 72% 50px, #939aa5, #939aa5 8.5px, transparent 9px, transparent),
            radial-gradient(#cbcdda, #cbcdda);
    }
.switch-btn.active::after{
        transform: translate(200px);
        box-shadow:
            10px 60px 0 10px transparent,
            65px 60px 0 5px transparent,
            95px 70px 0 10px transparent,
            135px 45px 0 5px transparent,
            170px 35px 0 10px transparent,
            195px -5px 0 10px transparent,
            10px 0 0 50px rgba(255, 255, 255, .2),
            -15px 0 0 50px rgba(255, 255, 255, .15),
            -40px 0 0 50px rgba(255, 255, 255, .21),
            10px 40px 0 10px transparent,
            70px 35px 0 10px transparent,
            95px 40px 0 10px transparent,
            135px 20px 0 10px transparent,
            155px 15px 0 10px transparent,
            190px -20px 0 10px transparent;
}
</style>
