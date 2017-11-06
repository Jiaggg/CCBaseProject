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
var UILayerMamager = (function (_super) {
    __extends(UILayerMamager, _super);
    function UILayerMamager() {
        var _this = _super.call(this) || this;
        _this.register_layer(UILayerMamager.UILAYER_START, []);
        _this.register_layer(UILayerMamager.UILAYER_GAMMING, []);
        return _this;
    }
    UILayerMamager.getInstance = function () {
        if (!UILayerMamager._instance)
            UILayerMamager._instance = new UILayerMamager();
        return UILayerMamager._instance;
    };
    UILayerMamager.prototype.createLayer = function (type) {
        switch (type) {
            case UILayerMamager.UILAYER_START:
                return new UILayerStart();
            case UILayerMamager.UILAYER_GAMMING:
                return new UILayerGamming();
        }
        return null;
    };
    UILayerMamager.UILAYER_START = "UILAYER_START";
    UILayerMamager.UILAYER_GAMMING = "UILAYER_GAMMING";
    return UILayerMamager;
}(CC.CCUILayerManager));
__reflect(UILayerMamager.prototype, "UILayerMamager");
//# sourceMappingURL=UILayerMamager.js.map