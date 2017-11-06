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
var UILayerGamming = (function (_super) {
    __extends(UILayerGamming, _super);
    function UILayerGamming() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/assets/define_skin/UILayerGammingSkin.exml";
        return _this;
    }
    UILayerGamming.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    UILayerGamming.prototype.onComplete = function () {
        this._back_btn = this["back_btn"];
        this._back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnTouchHandler, this);
    };
    UILayerGamming.prototype.btnTouchHandler = function (event) {
        UILayerMamager.getInstance().changeLayer(UILayerMamager.UILAYER_START);
    };
    UILayerGamming.prototype.update = function (dt) {
    };
    UILayerGamming.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this._back_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.btnTouchHandler, this);
    };
    return UILayerGamming;
}(CC.CCUILayerBaseClass));
__reflect(UILayerGamming.prototype, "UILayerGamming");
//# sourceMappingURL=UILayerGamming.js.map