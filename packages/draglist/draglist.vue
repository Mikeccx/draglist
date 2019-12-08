/* eslint-disable */
<template>
  <div class="draglist-warper">
    <ul>
      <li v-for="(item, index) in list"
      :key='index'
      @touchstart.stop="touchstart($event, index)"
      @touchend.stop="touchend($event, index)"
      @touchmove.stop="touchmove($event, index)">
      {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'draglist',
  props: {
    list: {
    }
  },
  data () {
    return {
      vueTouches: '', // 记录最开始点击的坐标
      height: '', // 每个列表高度
      longtapTime: null, // 长按定时器
      islongtap: false, // 是否是长按状态
      target: '', // 当前控制的元素
      tmph: 0
    }
  },
  methods: {
    // 长按事件
    longtap () {
      this.islongtap = true
    },
    touchstart (e, index) {
      var that = this
      // 添加点击效果
      e.currentTarget.classList.add('item-active')
      // 记录每列高度
      this.height = e.currentTarget.clientHeight
      // console.log(index)
      // 记录初始点击坐标
      this.vueTouches = {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
      }
      // 记录当前操作元素
      this.target = e.currentTarget
      this.longtapTime = setTimeout(function () { that.longtap() }, 350)
    },
    touchmove (e, index) {
      // 记录移动的x,y轴距离
      let x = e.changedTouches[0].pageX - this.vueTouches.x
      let y = e.changedTouches[0].pageY - this.vueTouches.y
      // 操作dom
      let li = document.getElementsByTagName('li')
      let h = this.height // 移动一格的距离
      e.currentTarget.classList.add('item-active')
      // 长按状态下和已添加区域才能移动
      if (this.islongtap && e.cancelable) {
        e.preventDefault()
        // 列表随着手势移动
        e.currentTarget.style = `transform:translate( ${x}px,${y}px);`
        if (Math.abs(y) > 0) {
          // 首尾特殊情况
          if ((index === 0 && y < 0) || (index === this.list.length && y > 0)) {
            return
          }
          this.step = Math.round(y / this.height)
          // 向下的情况
          if (y > 0 && (Math.round(y / this.height) + index) < this.list.length) {
            for (let i = index + 1; i < this.list.length; i++) {
              if (i > index + this.step) {
                li[i].style = `transform:translate( 0px,0px);transition:0.3s;`
              } else {
                li[i].style = `transform:translate( 0px,-${h}px);transition:0.3s;`
              }
            }
          }
          // 向上的情况
          if (y < 0) {
            this.step = Math.floor(y / this.height + 0.5)
            // console.log(y / this.height)
            // console.log(this.step)
            for (let i = index - 1; i >= 0; i--) {
              if (i < index + this.step) {
                li[i].style = `transform:translate( 0px,0px);transition:0.3s;`
              } else {
                li[i].style = `transform:translate( 0px,${h}px);transition:0.3s;`
              }
            }
          }
        }
      } else if (Math.abs(x) > 5 || Math.abs(y) > 5) {
        this.islongtap = false
        clearTimeout(this.longtapTime)
      }
    },
    touchend (e, index) {
      this.tmph = 0
      // console.log('touchend', e.defaultPrevented)
      // 移出点击移动效果
      e.currentTarget.classList.remove('item-active')
      // e.currentTarget.classList.remove('item-longtap')
      let li = document.getElementsByTagName('li')
      // 移除长按事件
      clearTimeout(this.longtapTime)
      // 通过改变数组改变其真正定位
      if (this.islongtap && (this.step !== 0)) {
        // console.log('longtap')
        let tem = this.list.splice(index, 1)
        this.list.splice(index + this.step, 0, tem[0])
        this.islongtap = false
      } else if (!this.islongtap) {
        console.log(this.islongtap)
      }
      // 重置长按事件
      this.islongtap = false
      // 修正move时暂时的位移
      for (let i = 0; i < this.list.length; i++) {
        li[i].style = `transform:translate( 0px,0px);`
      }
      this.step = 0
    }
  }
}
</script>
<style>
.draglist-warper{
  height: 100%;
  width: 100%;
  /* background: red; */
}
.draglist-warper li{
  border-radius: 5px;
}
.item-active{
  background: #cccccc
}
</style>
