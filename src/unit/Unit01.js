// =================================
// ------------[场景入口]------------
// =================================
// var Unit01Scene = cc.Scene.extend({
//     onEnter : function(){
//         this._super();
//         // var layer = new Demo1();
// //        var layer = new Demo2();
// //        var layer = new Demo3();
// //        var layer = new Demo4();
// //        var layer = new Demo5();
// //        var layer = new Demo6();

//         // this.addChild(layer);
//     }
// });

// Unit01 Demo

// 第1个Demo
var Demo1 = DemoBaseLayer.extend({
    // 英文标题
    getEnTitle : function(){
        return "Demo1";
    },
    // 中文标题
    getZhTitle : function(){
        return "实例1";
    },
    // 中文说明
    getZhInfo : function(){
        return " Unit1 : 一百块都不给我...好心塞...1";
    },
    onEnter : function(){
        this._super();
    }
});

// 第2个Demo
var Demo2 = DemoBaseLayer.extend({
    // 英文标题
    getEnTitle : function(){
        return "Demo2";
    },
    // 中文标题
    getZhTitle : function(){
        return "实例2";
    },
    // 中文说明
    getZhInfo : function(){
        return " Unit1 : 为了迎娶白富美，写代码也是蛮拼的...2";
    },
    onEnter : function(){
        this._super();
    }
});


// 第3个Demo
var Demo3 = DemoBaseLayer.extend({
    // 英文标题
    getEnTitle : function(){
        return "Demo3";
    },
    // 中文标题
    getZhTitle : function(){
        return "实例3";
    },
    // 中文说明
    getZhInfo : function(){
        return " Unit1 : 来福州，请你吃麻辣烫，6快钱的那种...3";
    },
    onEnter : function(){
        this._super();
    }
});


// 第4个Demo
var Demo4 = DemoBaseLayer.extend({
    // 英文标题
    getEnTitle : function(){
        return "Demo4";
    },
    // 中文标题
    getZhTitle : function(){
        return "实例4";
    },
    // 中文说明
    getZhInfo : function(){
        return " Unit1 : 我也是醉了...4";
    },
    onEnter : function(){
        this._super();
    }
});


// 第5个Demo
var Demo5 = DemoBaseLayer.extend({
    // 英文标题
    getEnTitle : function(){
        return "Demo5";
    },
    // 中文标题
    getZhTitle : function(){
        return "实例5";
    },
    // 中文说明
    getZhInfo : function(){
        return " Unit1 :2015 有代码，任性...5";
    },
    onEnter : function(){
        this._super();
    }
});


// 第6个Demo
var Demo6 = DemoBaseLayer.extend({
    // 英文标题
    getEnTitle : function(){
        return "Demo6";
    },
    // 中文标题
    getZhTitle : function(){
        return "实例6";
    },
    // 中文说明
    getZhInfo : function(){
        return " Unit1 : 买个Iphone 6plus,看看它到底拉屎不拉屎...6";
    },
    onEnter : function(){
        this._super();
    }
});