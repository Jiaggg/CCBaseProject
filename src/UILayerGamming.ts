class UILayerGamming extends CC.CCUILayerBaseClass {
	public constructor() {
		super();
		this.skinName = "resource/assets/define_skin/UILayerGammingSkin.exml";
	}
	
	private _back_btn : eui.Button;
	protected createChildren() {
        super.createChildren();
    }
		
	public onComplete():void{
		this._back_btn = this["back_btn"];
		this._back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnTouchHandler, this);
    }

	private btnTouchHandler(event:egret.TouchEvent):void {
		UILayerMamager.getInstance().changeLayer(UILayerMamager.UILAYER_START);
	}

	public update(dt:number):void{
	}

	public destroy():void{
		super.destroy();
		this._back_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
	}
}