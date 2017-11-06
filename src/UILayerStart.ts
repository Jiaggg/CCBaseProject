class UILayerStart extends CC.CCUILayerBaseClass {
	public constructor() {
		super();
		this.skinName = "resource/assets/define_skin/UILayerStartSkin.exml";
	}

	private _play_btn:eui.Button;
	protected createChildren() {
        super.createChildren();
    }

	public onComplete():void{
		this._play_btn = this["play_btn"];
		this._play_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
    }

	private btnTouchHandler(event:egret.TouchEvent):void {
		let sendMsg = CC.CCProtoBufClass.getInstance().BuildClass("SendMsg ");
		sendMsg.id = 10;
		sendMsg.name = "lll";
		
		
		// UILayerMamager.getInstance().changeLayer(UILayerMamager.UILAYER_GAMMING);
	}

	public update(dt:number):void{

	}

	public destroy():void{
		super.destroy();
		this._play_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
	}
}