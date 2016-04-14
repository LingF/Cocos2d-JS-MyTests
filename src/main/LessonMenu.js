var LessonMenuLayer = cc.LayerColor.extend({
    _lessons: null
  , ctor: function(args) {
      this._super();
      this._lessons = args;
    }
  , onEnter : function(){
      this._super(cc.color(0, 0, 0));

      // 菜单
      var itemMenu = new cc.Menu();
      var lessonNames = this._lessons;

      // 遍历所有的示例
      for (var i = 0; i < lessonNames.length; i++) {
        var label = new cc.LabelTTF(lessonNames[i].title, 'Arial', 64);
        var menuItem = new cc.MenuItemLabel(label, this.onMenuCallback, this);
        itemMenu.addChild(menuItem, i + 10000);
        menuItem.setPosition(GC.w2, GC.h - (i + 1) * LINE_SPACE);
      }

      // 菜单属性配置
      itemMenu.setContentSize(GC.w, (lessonNames.length + 1) * LINE_SPACE);
      itemMenu.setPosition(0, 0);
      this.addChild(itemMenu);
    },

    //
    onMenuCallback : function(sender){

      var lessonNames = this._lessons;
      // TODO 根据层级区分当前的菜单item
      var idx = sender.getLocalZOrder() - 10000;
      DEMO_IDX = idx;
      var testCase = lessonNames[idx];
      var layer = arrayDemo[UNIT_IDX][idx];
      var scene = new LessonScene(layer);
      cc.director.runScene(scene);

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

var LessonMenu = cc.Scene.extend({
    _lessons: null
  , ctor: function(args) {
    this._super();

    this._lessons = args;
  }
  , onEnter : function(){
    this._super();

    var layer = new LessonMenuLayer(this._lessons);
    this.addChild(layer);
  }
});

var LessonScene = cc.Scene.extend({
  _layer: null
, ctor: function(args) {
    this._super();

    this._layer = args;
  }
, onEnter: function() {
    this._super();

    var layer = new this._layer();
    this.addChild(layer);
  }
});

