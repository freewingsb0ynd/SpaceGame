/**
 * Created by CPU11635_LOCAL on 11/9/2018.
 */

var ScreenSpaceGame = cc.Layer.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,

    ctor:function() {


        this._super();
        this.loadGui();
        this.initGame();
    },
    loadGui:function()
    {
        this.removeAllChildren();
        var size = cc.winSize;
        var xBtn = 7*size.height/12;

        //var btnVietLang = gv.commonButton(200, 64, size.width - 120, size.height - 52,"Vietnamese");
        //this.addChild(btnVietLang);
        //btnVietLang.addClickEventListener(this.onSelectVietnamese.bind(this));
        //
        //var btnEnglish = gv.commonButton(200, 64, size.width - 120, size.height - 136,"English");
        //this.addChild(btnEnglish);
        //btnEnglish.addClickEventListener(this.onSelectEnglish.bind(this));
        //
        //var lblHello = gv.commonText(fr.Localization.text("lang_hello"), size.width*0.4, size.height*0.8);
        //this.addChild(lblHello);
        //
        //var lblDemo = gv.commonText(fr.Localization.text("lang_auto_text"), size.width*0.4, size.height*0.5);
        //this.addChild(lblDemo);

        var btnBack = gv.commonButton(100, 64, size.width - 70, 52,"Back");
        this.addChild(btnBack);
        btnBack.addClickEventListener(this.onSelectBack.bind(this));
    },

    onEnter:function(){
        this._super();
    },

    initGame:function(){
        var size = cc.winSize;
        //var spriteSheet = new cc.Sprite("./res/space game/#Sprites.pvr.ccz");

        //var _batchNode = new cc.SpriteBatchNode("Sprites.pvr.ccz");
        //this.addChild(_batchNode);
        cc.spriteFrameCache.addSpriteFrames("./res/space game/Spritesheets/Sprites.plist");
        //cc.spriteFrameCache.addSpriteFrames(res.b01_plist);
        //var cache = cc.SpriteFrameCache.getInstance();
        /*addSpriteFrameWithFile("./res/space game/Sprites.plist");*/
        //cache.addSpriteFrames("./res/space game/Spritesheets/Sprites.plist", "./res/space game/Spritesheets/Sprites.pvr.ccz");

        var _ship = cc.Sprite("#SpaceFlier_sm_1.png");
            //createWithSpriteFrameName("SpaceFlier_sm_1.png");


        _ship.setPosition(cc.p(size.width * 0.1, size.height * 0.5));
        //_batchNode.addChild(_ship, 1);

        this.addChild(_ship);
    },




    onSelectBack:function(sender)
    {
        fr.view(ScreenMenu);
    },
    onSelectVietnamese:function(sender)
    {
        fr.Localization.getInstance().setCurrentLanguage('vi');
        this.loadGui();
    },
    onSelectEnglish:function(sender)
    {
        fr.Localization.getInstance().setCurrentLanguage('en');
        this.loadGui();
    }
});