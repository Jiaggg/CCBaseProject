var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CC;
(function (CC) {
    var CCUILayerManager = (function () {
        function CCUILayerManager() {
            this._typeForGroups = {};
        }
        CCUILayerManager.prototype.register_layer = function (type, groups) {
            this._typeForGroups[type] = groups;
        };
        CCUILayerManager.prototype.init = function (root) {
            this._root = root;
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        };
        CCUILayerManager.prototype.createLayer = function (type) {
            return null;
        };
        CCUILayerManager.prototype.changeLayer = function (type) {
            if (this._curLoading)
                return false;
            this._curLoading = true;
            this._curLoadedGroups = {};
            this._curLoadingGroups = this._typeForGroups[type];
            this._nextType = type;
            var len = this._curLoadingGroups.length;
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    RES.loadGroup(this._curLoadingGroups[i]);
                }
            }
            else {
                this.loadCmp();
            }
        };
        CCUILayerManager.prototype.loadCmp = function () {
            if (this._curType) {
                var grps = this._typeForGroups[this._curType];
                for (var i = 0; i < grps.length; i++) {
                    RES.destroyRes(grps[i]);
                }
                if (this._curLayer) {
                    if (this._curLayer.parent)
                        this._curLayer.parent.removeChild(this._curLayer);
                    this._curLayer.destroy();
                }
            }
            this._curType = this._nextType;
            this._curLayer = this.createLayer(this._nextType);
            this._curLoading = false;
            if (!this._curLayer) {
                Error("....");
                return;
            }
            this._root.addChild(this._curLayer);
        };
        CCUILayerManager.prototype.onResourceLoadComplete = function (event) {
            if (this._curLoadingGroups.indexOf(event.groupName) == -1)
                return;
            this._curLoadedGroups[event.groupName] = event.groupName;
            var cmp = true;
            for (var i = 0; i < this._curLoadingGroups.length; i++) {
                if (!this._curLoadedGroups[this._curLoadingGroups[i]]) {
                    cmp = false;
                    break;
                }
            }
            if (cmp) {
                this.loadCmp();
            }
        };
        CCUILayerManager.prototype.onResourceLoadError = function (event) {
            console.log("yyyyyyyyyyyy");
        };
        CCUILayerManager.prototype.onResourceProgress = function (event) {
            console.log("uuuuuuuuuuuu");
        };
        CCUILayerManager.prototype.onItemLoadError = function (event) {
            console.log("qqqqqqqqqqqq");
        };
        return CCUILayerManager;
    }());
    CC.CCUILayerManager = CCUILayerManager;
    __reflect(CCUILayerManager.prototype, "CC.CCUILayerManager");
})(CC || (CC = {}));
//# sourceMappingURL=CCUILayerManager.js.map