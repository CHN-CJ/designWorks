<template>
  <div class="welcome-body">
    <div class="criterion">
      <div class="text text0">W</div>
      <div class="text text1">e</div>
      <div class="text text2">l</div>
      <div class="text text3">c</div>
      <div class="text text4">o</div>
      <div class="text text5">m</div>
      <div class="text text6">e</div>
      <div class="text text7">: )</div>
      <div class="frame frame0"></div>
      <div class="frame frame1"></div>
      <div class="frame frame2"></div>
      <div class="frame frame3"></div>
      <div class="frame frame4"></div>
      <div class="frame frame5"></div>
      <div class="frame frame6"></div>
      <div class="frame frame7"></div>
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
$width: 40;
$height: 40;

* {
  margin: 0;
  padding: 0;
}

.welcome-body {
  height: 100vh;
  width: 100vw;
  font-family: "Montserrat", sans-serif;
  background: #fff;
  // background:#ecf0f3;
  position: relative;
  overflow: hidden;
  font-size: 100%;
  text-align: center;

  .criterion {
    font-size: 1.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 0;
    width: 0;
    transform: translate(-($height) px, -($height) px);

    .text {
      position: absolute;
      width: 40px;
      line-height: 40px;
      opacity: 0;
      overflow: hidden;

      &::after {
        z-index: -1;
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 40px;
      }

      &.text0 {
        left: -140px;
        top: 0;
        -webkit-animation: text-animation0 1s ease-in-out 1s 1 normal forwards,
          text2-animation0 2s ease-in-out 5s 1 normal forwards;
        animation: text-animation0 1s ease-in-out 1s 1 normal forwards,
          text2-animation0 2s ease-in-out 5s 1 normal forwards;

        &::after {
          -webkit-animation: text-after-animation0 2s ease-in-out 3s 1 normal
            forwards;
          animation: text-after-animation0 2s ease-in-out 3s 1 normal forwards;
        }
      }

      &.text1 {
        left: -100px;
        top: 0;
        -webkit-animation: text-animation1 1s ease-in-out 1.2s 1 normal forwards,
          text2-animation1 2s ease-in-out 5s 1 normal forwards;
        animation: text-animation1 1s ease-in-out 1.2s 1 normal forwards,
          text2-animation1 2s ease-in-out 5s 1 normal forwards;

        &::after {
          -webkit-animation: text-after-animation1 2s ease-in-out 3s 1 normal
            forwards;
          animation: text-after-animation1 2s ease-in-out 3s 1 normal forwards;
        }
      }

      &.text2 {
        left: -60px;
        top: 0;
        -webkit-animation: text-animation2 1s ease-in-out 1.4s 1 normal forwards,
          text2-animation2 2s ease-in-out 5s 1 normal forwards;
        animation: text-animation2 1s ease-in-out 1.4s 1 normal forwards,
          text2-animation2 2s ease-in-out 5s 1 normal forwards;

        &::after {
          -webkit-animation: text-after-animation2 2s ease-in-out 3s 1 normal
            forwards;
          animation: text-after-animation2 2s ease-in-out 3s 1 normal forwards;
        }
      }

      &.text3 {
        left: -20px;
        top: 0;
        -webkit-animation: text-animation3 1s ease-in-out 1.6s 1 normal forwards,
          text2-animation3 2s ease-in-out 5s 1 normal forwards;
        animation: text-animation3 1s ease-in-out 1.6s 1 normal forwards,
          text2-animation3 2s ease-in-out 5s 1 normal forwards;

        &::after {
          -webkit-animation: text-after-animation3 2s ease-in-out 3s 1 normal
            forwards;
          animation: text-after-animation3 2s ease-in-out 3s 1 normal forwards;
        }
      }

      &.text4 {
        left: 20px;
        top: 0;
        -webkit-animation: text-animation4 1s ease-in-out 1.8s 1 normal forwards,
          text2-animation4 2s ease-in-out 5s 1 normal forwards;
        animation: text-animation4 1s ease-in-out 1.8s 1 normal forwards,
          text2-animation4 2s ease-in-out 5s 1 normal forwards;

        &::after {
          -webkit-animation: text-after-animation4 2s ease-in-out 3s 1 normal
            forwards;
          animation: text-after-animation4 2s ease-in-out 3s 1 normal forwards;
        }
      }

      &.text5 {
        left: 60px;
        top: 0;
        -webkit-animation: text-animation5 1s ease-in-out 2s 1 normal forwards,
          text2-animation5 2s ease-in-out 5s 1 normal forwards;
        animation: text-animation5 1s ease-in-out 2s 1 normal forwards,
          text2-animation5 2s ease-in-out 5s 1 normal forwards;

        &::after {
          -webkit-animation: text-after-animation5 2s ease-in-out 3s 1 normal
            forwards;
          animation: text-after-animation5 2s ease-in-out 3s 1 normal forwards;
        }
      }

      &.text6 {
        left: 100px;
        top: 0;
        -webkit-animation: text-animation6 1s ease-in-out 2.2s 1 normal forwards,
          text2-animation6 2s ease-in-out 5s 1 normal forwards;
        animation: text-animation6 1s ease-in-out 2.2s 1 normal forwards,
          text2-animation6 2s ease-in-out 5s 1 normal forwards;

        &::after {
          -webkit-animation: text-after-animation6 2s ease-in-out 3s 1 normal
            forwards;
          animation: text-after-animation6 2s ease-in-out 3s 1 normal forwards;
        }
      }

      &.text7 {
        left: 140px;
        top: 0;
        -webkit-animation: text-animation7 1s ease-in-out 2.4s 1 normal forwards,
          text2-animation7 2s ease-in-out 5s 1 normal forwards;
        animation: text-animation7 1s ease-in-out 2.4s 1 normal forwards,
          text2-animation7 2s ease-in-out 5s 1 normal forwards;

        &::after {
          -webkit-animation: text-after-animation7 2s ease-in-out 3s 1 normal
            forwards;
          animation: text-after-animation7 2s ease-in-out 3s 1 normal forwards;
        }
      }

      &.text8 {
        left: 180px;
        top: 0;
        -webkit-animation: text-animation8 1s ease-in-out 2.6s 1 normal forwards,
          text2-animation8 2s ease-in-out 5s 1 normal forwards;
        animation: text-animation8 1s ease-in-out 2.6s 1 normal forwards,
          text2-animation8 2s ease-in-out 5s 1 normal forwards;
        &::after {
          -webkit-animation: text-after-animation8 2s ease-in-out 3s 1 normal
            forwards;
          animation: text-after-animation8 2s ease-in-out 3s 1 normal forwards;
        }
      }
    }

    .frame {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      opacity: 0;

      &.frame0 {
        left: -140px;
        top: 0;
        -webkit-animation: frame-animation0 1s ease-in-out 0ms 1 normal forwards;
        animation: frame-animation0 1s ease-in-out 0ms 1 normal forwards;
        background-color: #eb4747;
      }

      &.frame1 {
        left: -100px;
        top: 0;
        -webkit-animation: frame-animation1 1s ease-in-out 200ms 1 normal
          forwards;
        animation: frame-animation1 1s ease-in-out 200ms 1 normal forwards;
        background-color: #ebc247;
      }

      &.frame2 {
        left: -60px;
        top: 0;
        -webkit-animation: frame-animation2 1s ease-in-out 400ms 1 normal
          forwards;
        animation: frame-animation2 1s ease-in-out 400ms 1 normal forwards;
        background-color: #99eb47;
      }

      &.frame3 {
        left: -20px;
        top: 0;
        -webkit-animation: frame-animation3 1s ease-in-out 600ms 1 normal
          forwards;
        animation: frame-animation3 1s ease-in-out 600ms 1 normal forwards;
        background-color: #47eb70;
      }

      &.frame4 {
        left: 20px;
        top: 0;
        -webkit-animation: frame-animation4 1s ease-in-out 800ms 1 normal
          forwards;
        animation: frame-animation4 1s ease-in-out 800ms 1 normal forwards;
        background-color: #47ebeb;
      }

      &.frame5 {
        left: 60px;
        top: 0;
        -webkit-animation: frame-animation5 1s ease-in-out 1000ms 1 normal
          forwards;
        animation: frame-animation5 1s ease-in-out 1000ms 1 normal forwards;
        background-color: #4770eb;
      }
      &.frame6 {
        left: 100px;
        top: 0;
        -webkit-animation: frame-animation6 1s ease-in-out 1200ms 1 normal
          forwards;
        animation: frame-animation6 1s ease-in-out 1200ms 1 normal forwards;
        background-color: #9947eb;
      }
      &.frame7 {
        left: 140px;
        top: 0;
        -webkit-animation: frame-animation7 1s ease-in-out 1400ms 1 normal
          forwards;
        animation: frame-animation7 1s ease-in-out 1400ms 1 normal forwards;
        background-color: #eb47c2;
      }
      &.frame8 {
        left: 180px;
        top: 0;
        -webkit-animation: frame-animation8 1s ease-in-out 1600ms 1 normal
          forwards;
        animation: frame-animation8 1s ease-in-out 1600ms 1 normal forwards;
        background-color: #eb4747;
      }
    }
  }
}

@-webkit-keyframes text-animation0 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes text-animation0 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes text-animation1 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes text-animation1 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes text-animation2 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes text-animation2 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes text-animation3 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes text-animation3 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes text-animation4 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes text-animation4 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes text-animation5 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes text-animation5 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes text-animation6 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes text-animation6 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes text-animation7 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes text-animation7 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes text-animation8 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@keyframes text-animation8 {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  50% {
    transform: scale(3, 3);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
}
@-webkit-keyframes text-after-animation0 {
  0% {
    width: 0px;
    background-color: #eb4747;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@keyframes text-after-animation0 {
  0% {
    width: 0px;
    background-color: #eb4747;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@-webkit-keyframes text-after-animation1 {
  0% {
    width: 0px;
    background-color: #ebc247;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@keyframes text-after-animation1 {
  0% {
    width: 0px;
    background-color: #ebc247;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@-webkit-keyframes text-after-animation2 {
  0% {
    width: 0px;
    background-color: #99eb47;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@keyframes text-after-animation2 {
  0% {
    width: 0px;
    background-color: #99eb47;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@-webkit-keyframes text-after-animation3 {
  0% {
    width: 0px;
    background-color: #47eb70;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@keyframes text-after-animation3 {
  0% {
    width: 0px;
    background-color: #47eb70;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@-webkit-keyframes text-after-animation4 {
  0% {
    width: 0px;
    background-color: #47ebeb;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@keyframes text-after-animation4 {
  0% {
    width: 0px;
    background-color: #47ebeb;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@-webkit-keyframes text-after-animation5 {
  0% {
    width: 0px;
    background-color: #4770eb;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@keyframes text-after-animation5 {
  0% {
    width: 0px;
    background-color: #4770eb;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@-webkit-keyframes text-after-animation6 {
  0% {
    width: 0px;
    background-color: #9947eb;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@keyframes text-after-animation6 {
  0% {
    width: 0px;
    background-color: #9947eb;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@-webkit-keyframes text-after-animation7 {
  0% {
    width: 0px;
    background-color: #eb47c2;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@keyframes text-after-animation7 {
  0% {
    width: 0px;
    background-color: #eb47c2;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@-webkit-keyframes text-after-animation8 {
  0% {
    width: 0px;
    background-color: #eb4747;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@keyframes text-after-animation8 {
  0% {
    width: 0px;
    background-color: #eb4747;
    opacity: 1;
  }
  50% {
    width: 40px;
    opacity: 1;
  }
  100% {
    left: 40px;
    opacity: 0;
  }
}
@-webkit-keyframes text2-animation0 {
  0% {
    left: -140px;
    opacity: 1;
  }
  50% {
    left: -100px;
    opacity: 0;
  }
  100% {
    left: -100px;
    opacity: 0;
  }
}
@keyframes text2-animation0 {
  0% {
    left: -140px;
    opacity: 1;
  }
  50% {
    left: -100px;
    opacity: 0;
  }
  100% {
    left: -100px;
    opacity: 0;
  }
}
@-webkit-keyframes text2-animation1 {
  0% {
    left: -100px;
    opacity: 1;
  }
  50% {
    left: -60px;
    opacity: 0;
  }
  100% {
    left: -60px;
    opacity: 0;
  }
}
@keyframes text2-animation1 {
  0% {
    left: -100px;
    opacity: 1;
  }
  50% {
    left: -60px;
    opacity: 0;
  }
  100% {
    left: -60px;
    opacity: 0;
  }
}
@-webkit-keyframes text2-animation2 {
  0% {
    left: -60px;
    opacity: 1;
  }
  50% {
    left: -20px;
    opacity: 0;
  }
  100% {
    left: -20px;
    opacity: 0;
  }
}
@keyframes text2-animation2 {
  0% {
    left: -60px;
    opacity: 1;
  }
  50% {
    left: -20px;
    opacity: 0;
  }
  100% {
    left: -20px;
    opacity: 0;
  }
}
@-webkit-keyframes text2-animation3 {
  0% {
    left: -20px;
    opacity: 1;
  }
  50% {
    left: 20px;
    opacity: 0;
  }
  100% {
    left: 20px;
    opacity: 0;
  }
}
@keyframes text2-animation3 {
  0% {
    left: -20px;
    opacity: 1;
  }
  50% {
    left: 20px;
    opacity: 0;
  }
  100% {
    left: 20px;
    opacity: 0;
  }
}
@-webkit-keyframes text2-animation4 {
  0% {
    left: 20px;
    opacity: 1;
  }
  50% {
    left: 60px;
    opacity: 0;
  }
  100% {
    left: 60px;
    opacity: 0;
  }
}
@keyframes text2-animation4 {
  0% {
    left: 20px;
    opacity: 1;
  }
  50% {
    left: 60px;
    opacity: 0;
  }
  100% {
    left: 60px;
    opacity: 0;
  }
}
@-webkit-keyframes text2-animation5 {
  0% {
    left: 60px;
    opacity: 1;
  }
  50% {
    left: 100px;
    opacity: 0;
  }
  100% {
    left: 100px;
    opacity: 0;
  }
}
@keyframes text2-animation5 {
  0% {
    left: 60px;
    opacity: 1;
  }
  50% {
    left: 100px;
    opacity: 0;
  }
  100% {
    left: 100px;
    opacity: 0;
  }
}
@-webkit-keyframes text2-animation6 {
  0% {
    left: 100px;
    opacity: 1;
  }
  50% {
    left: 140px;
    opacity: 0;
  }
  100% {
    left: 140px;
    opacity: 0;
  }
}
@keyframes text2-animation6 {
  0% {
    left: 100px;
    opacity: 1;
  }
  50% {
    left: 140px;
    opacity: 0;
  }
  100% {
    left: 140px;
    opacity: 0;
  }
}
@-webkit-keyframes text2-animation7 {
  0% {
    left: 140px;
    opacity: 1;
    top: 0;
    transform: scale(1, 1);
  }
  50% {
    left: 180px;
    opacity: 1;
    transform: scale(1, 1);
  }
  65% {
    top: 0;
    transform: scale(1, 1);
  }
  70% {
    transform: scale(3, 3) rotate(90deg);
    top: -30px;
  }
  75% {
    left: 180px;
    top: 0;
    opacity: 1;
    transform: scale(2, 2) rotate(90deg);
  }
  85% {
    left: 180px;
  }
  100% {
    left: 1000px;
    opacity: 0;
    transform: scale(2, 2) rotate(90deg);
  }
}
@keyframes text2-animation7 {
  0% {
    left: 140px;
    opacity: 1;
    top: 0;
    transform: scale(1, 1);
  }
  50% {
    left: 180px;
    opacity: 1;
    transform: scale(1, 1);
  }
  65% {
    top: 0;
    transform: scale(1, 1);
  }
  70% {
    transform: scale(3, 3) rotate(90deg);
    top: -30px;
  }
  75% {
    left: 180px;
    top: 0;
    opacity: 1;
    transform: scale(2, 2) rotate(90deg);
  }
  85% {
    left: 180px;
  }
  100% {
    left: 1000px;
    opacity: 0;
    transform: scale(2, 2) rotate(90deg);
  }
}
@-webkit-keyframes text2-animation8 {
  0% {
    left: 180px;
    opacity: 1;
  }
  50% {
    left: 220px;
    opacity: 0;
  }
  100% {
    left: 220px;
    opacity: 0;
  }
}
@keyframes text2-animation8 {
  0% {
    left: 180px;
    opacity: 1;
  }
  50% {
    left: 220px;
    opacity: 0;
  }
  100% {
    left: 220px;
    opacity: 0;
  }
}

@-webkit-keyframes frame-animation0 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@keyframes frame-animation0 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@-webkit-keyframes frame-animation1 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@keyframes frame-animation1 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@-webkit-keyframes frame-animation2 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@keyframes frame-animation2 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@-webkit-keyframes frame-animation3 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@keyframes frame-animation3 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@-webkit-keyframes frame-animation4 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@keyframes frame-animation4 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@-webkit-keyframes frame-animation5 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@keyframes frame-animation5 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@-webkit-keyframes frame-animation6 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@keyframes frame-animation6 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@-webkit-keyframes frame-animation7 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@keyframes frame-animation7 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@-webkit-keyframes frame-animation8 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
@keyframes frame-animation8 {
  0% {
    transform: translateY(-1000px);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
</style>