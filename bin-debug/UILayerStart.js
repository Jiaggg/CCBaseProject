var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UILayerStart = (function (_super) {
    __extends(UILayerStart, _super);
    function UILayerStart() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/assets/define_skin/UILayerStartSkin.exml";
        return _this;
    }
    UILayerStart.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    UILayerStart.prototype.onComplete = function () {
        // this._play_btn = this["play_btn"];
        // this._play_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
    };
    UILayerStart.prototype.btnTouchHandler = function (event) {
        // let sendMsg = CC.CCProtoBufClass.getInstance().BuildClass("SendMsg ");
        // sendMsg.id = 10;
        // sendMsg.name = "lll";
        UILayerMamager.getInstance().changeLayer(UILayerMamager.UILAYER_GAMMING);
    };
    UILayerStart.prototype.update = function (dt) {
    };
    UILayerStart.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this._play_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnTouchHandler, this);
    };
    return UILayerStart;
}(CC.CCUILayerBaseClass));
__reflect(UILayerStart.prototype, "UILayerStart");
//# sourceMappingURL=UILayerStart.js.map