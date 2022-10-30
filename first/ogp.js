class InternalOgp extends HTMLElement {
	constructor() {
		super();
		const options = {
			stylesheetLocation: "ogp.sef.json",
			//DocumentFragmentを取得しXSLTのソースとする
			sourceNode: document.getElementById('ogp-template').content,
			stylesheetParams:{
				//カスタム要素の値をXSLTのパラメーターに設定
				"path":this.getAttribute("path")
			},
			//結果をDOMで取得する
			destination:"document"
		};
		SaxonJS.transform(options, "async")
		//SaxonJSから
		.then(d=>{
			//
			this
			//シャドールートにアタッチ
			.attachShadow({mode:"open"})
			//変換後のNodeを追加
			.appendChild(d.principalResult);
		 }).catch(v=>{
			console.log(v);
		 });
	}
}

window.addEventListener('DOMContentLoaded', ()=>{
	customElements.define("internal-ogp",InternalOgp);
});


