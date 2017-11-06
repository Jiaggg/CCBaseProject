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
var CC;
(function (CC) {
    var CCUILayerBaseClass = (function (_super) {
        __extends(CCUILayerBaseClass, _super);
        function CCUILayerBaseClass() {
            var _this = _super.call(this) || this;
            _this._lastFrameTime = egret.getTimer();
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createOnComplete, _this);
            return _this;
        }
        CCUILayerBaseClass.prototype.createOnComplete = function () {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createOnComplete, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.onComplete();
        };
        CCUILayerBaseClass.prototype.onComplete = function () {
        };
        CCUILayerBaseClass.prototype.onEnterFrame = function () {
            var now = egret.getTimer();
            this.update(now - this._lastFrameTime);
            this._lastFrameTime = now;
        };
        CCUILayerBaseClass.prototype.update = function (dt) {
        };
        CCUILayerBaseClass.prototype.destroy = function () {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        };
        return CCUILayerBaseClass;
    }(eui.Component));
    CC.CCUILayerBaseClass = CCUILayerBaseClass;
    __reflect(CCUILayerBaseClass.prototype, "CC.CCUILayerBaseClass");
})(CC || (CC = {}));
//# sourceMappingURL=CCUILayerBaseClass.js.map