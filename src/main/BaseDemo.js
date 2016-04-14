
// Unit 索引
var UNIT_IDX = 0;
// Lesson (Demo) 索引
var DEMO_IDX = 0;

// Demo模版，所有具体Demo层的父类。只是实现了3个功能。
//  1. 返回上一个Demo
//  2. 重启当前Demo
//  3. 进入下一个Demo
var DemoBaseLayer = BaseLayer.extend({
  // 示例切换[上一个]
  onBackCallback : function(sender){
    var scene = new cc.Scene();
    scene.addChild(onBackDemo());
    cc.director.runScene(scene);
  },
  // 示例切换[重启当前]
  onRestartCallback : function(sender){
    var scene = new cc.Scene();
    scene.addChild(onRestartDemo());
    cc.director.runScene(scene);
  },
  // 示例切换[下一个]
  onNextCallback : function(sender){
    var scene = new cc.Scene();
    scene.addChild(onNextDemo());
    cc.director.runScene(scene);
  },
  onEnter : function(){
    this._super();
  }
});

// 返回上一个Demo
var onBackDemo = function () {
  DEMO_IDX--;
  if (DEMO_IDX < 0) {
    DEMO_IDX += arrayDemo[UNIT_IDX].length;
  }
  return new arrayDemo[UNIT_IDX][DEMO_IDX]();
};

// 重启当前Demo
var onRestartDemo = function () {
  return new arrayDemo[UNIT_IDX][DEMO_IDX]();
};

// 进入下一个Demo
var onNextDemo = function () {
  DEMO_IDX++;
  DEMO_IDX = DEMO_IDX % arrayDemo[UNIT_IDX].length;  // 取余，保证头尾循环
  return new arrayDemo[UNIT_IDX][DEMO_IDX]();
};