var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CC;
(function (CC) {
    var CCProtoBufClass = (function () {
        function CCProtoBufClass() {
            var str = RES.getRes(Global.proto_file);
            this.builder = dcodeIO.ProtoBuf.newBuilder();
            dcodeIO.ProtoBuf.loadProto(str, this.builder);
            // let protoroot = this.builder.build();
            // let msgCls = protoroot.login["Login"];
            // let msgObj = new msgCls({userName:"test",password:"123456", sex:1, isFirstLogin:false, param:["test", "array", "param"]});
            // let msg = msgObj.encode();
            // let msgDe = msgCls.decode(msg);
            // console.log(msgDe);  
        }
        CCProtoBufClass.getInstance = function () {
            if (this._instance == null)
                this._instance = new CCProtoBufClass();
            return this._instance;
        };
        CCProtoBufClass.prototype.BuildClass = function (className) {
            return this.builder.build(className);
        };
        return CCProtoBufClass;
    }());
    CC.CCProtoBufClass = CCProtoBufClass;
    __reflect(CCProtoBufClass.prototype, "CC.CCProtoBufClass");
})(CC || (CC = {}));
//# sourceMappingURL=CCProtoBufClass.js.map