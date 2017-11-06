module CC {
	export class CCProtoBufClass {
		private static _instance:CCProtoBufClass;
		private builder:dcodeIO.ProtoBuf.Builder;
		public constructor() {
			let str:string = RES.getRes(Global.proto_file);
			this.builder = dcodeIO.ProtoBuf.newBuilder();
			dcodeIO.ProtoBuf.loadProto(str, this.builder);
			// let protoroot = this.builder.build();
			// let msgCls = protoroot.login["Login"];
			// let msgObj = new msgCls({userName:"test",password:"123456", sex:1, isFirstLogin:false, param:["test", "array", "param"]});
			// let msg = msgObj.encode();
			// let msgDe = msgCls.decode(msg);
			// console.log(msgDe);  
		}

		public static getInstance():CCProtoBufClass{
			if (this._instance == null)
			this._instance = new CCProtoBufClass();
			return this._instance;
		}

		public BuildClass(className:string):any
		{
			return this.builder.build(className);
		}

	}
}