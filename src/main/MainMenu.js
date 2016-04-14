// 启动进入的主界面

// 行高
var LINE_SPACE = 100;

var MainMenuLayer = cc.LayerColor.extend({
    onEnter : function(){
      this._super();

      // 菜单
      var itemMenu = new cc.Menu();

      // 遍历所有的示例
      for (var i = 0; i < testNames.length; i++) {
        var label = new cc.LabelTTF(testNames[i].title, 'Arial', 64);
        var menuItem = new cc.MenuItemLabel(label, this.onMenuCallback, this);
        itemMenu.addChild(menuItem, i + 10000);
        menuItem.setPosition(GC.w2, GC.h - (i + 1) * LINE_SPACE);
      }

      // 菜单属性配置
      itemMenu.setContentSize(GC.w, (testNames.length + 1) * LINE_SPACE);
      itemMenu.setPosition(0, 0);
      this.addChild(itemMenu);
    },

    //
    onMenuCallback : function(sender){

      // TODO 根据层级区分当前的菜单item
      var idx = sender.getLocalZOrder() - 10000;
      var testCase = testNames[idx];
      UNIT_IDX = idx;
      var lessons = testCase.lessons
      if (lessons && lessons.length) {
        var scene = new LessonMenu(lessons);//testCase.getScene();
        cc.director.runScene(scene);
      } else {
        cc.log('本单元暂时没有Demo.')
      }


      // 如果需要加载资源
      // if (false){
      //   var res = testCase.resource || [];
      //   cc.LoaderScene.preload(res, function () {
      //     var scene = testCase.getScene();
      //     cc.director.runScene(scene);
      //   }, this);
      // }
    }
});


// =================================
// ------------[场景入口]------------
// =================================
var MainMenuScene = cc.Scene.extend({
  onEnter : function(){
    this._super();

    var layer = new MainMenuLayer();
    this.addChild(layer);
  }
});