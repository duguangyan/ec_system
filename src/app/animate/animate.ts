
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// 定义一个鼠标点击运动的动画

export const appAnimate = trigger('box', [
  // 定义一个状态left
  state('up', style({ 'height': '0%' })),
  // 定义另外一个状态right
  state('dowm', style({ 'height': '100%' })),
  // 定义运动过程(从left到right状态)
  transition('left=>right', animate(500, keyframes([
    style({ height:'0%'}),
    style({ height:'10%'}),
    style({ height:'20%'}),
    style({ height:'30%'}),
    style({ height:'40%'}),
    style({ height:'50%'}),
    style({ height:'60%'}),
    style({ height:'70%'}),
    style({ height:'80%'}),
    style({ height:'90%'}),
    style({ height:'100%'})
  ]))),
  // 定义运动过程(从right到left)
  transition('right=>left', animate(500, keyframes([
    style({ height:'100%'}),
    style({ height:'90%'}),
    style({ height:'80%'}),
    style({ height:'70%'}),
    style({ height:'60%'}),
    style({ height:'50%'}),
    style({ height:'40%'}),
    style({ height:'30%'}),
    style({ height:'20%'}),
    style({ height:'10%'}),
    style({ height:'0%'})
  ]))),
]);
