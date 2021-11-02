import{s as e,r as t,p as i}from"./8c53f1d6.js";const s=new URL(new URL("8e69de73.svg",import.meta.url).href,import.meta.url).href;class r extends e{static get tag(){return"toggle-content"}constructor(){super(),this.arrow=s,this.visible=!1}static get properties(){return{}}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),this.shadowRoot.querySelector("img").addEventListener("click",this.toggleContent.bind(this))}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return t`:host{display:block;min-width:20em}img{display:inline-flex;height:var(--learning-card-height,100px);width:var(--learning-card-width,100px)}.rotate{transition:transform .5s ease-in}.hidden{transform:scale(0) translateY(-100%);min-height:40px;max-height:40px;transition:transform .5s ease-in,max-height .5s ease-in}.visible{overflow:hidden;transform:scale(100%) translateY(0);min-height:40px;max-height:1000px;transition:max-height .5s ease-in,transform .5s ease-in}`}toggleContent(){const e=this.shadowRoot.querySelector("img");if(this.visible){const t=this.shadowRoot.querySelector(".visible");e.style.transform="rotate(0deg)",t.className="hidden"}else{const t=this.shadowRoot.querySelector(".hidden");e.style.transform="rotate(90deg)",t.className="visible"}this.visible=!this.visible}render(){return i` <img src="${this.arrow}" class="rotate" alt="Dropdown arrow" style="max-height:40px;max-width:40px;rotation:90deg;display:inline-flex"> <div class="hidden"> <slot></slot> </div> `}static get haxProperties(){return{canScale:!1,canPosition:!1,canEditSource:!0,contentEditable:!0,gizmo:{title:"Learning Card",description:"An element that you have to replace / fix / improve",icon:"credit-card",color:"blue",groups:["Content","Presentation","Education"]},settings:{configure:[{property:"type",title:"Type",description:"Identifies the card",inputMethod:"select",options:{science:"Science",math:"Math"}}],advanced:[]},demoSchema:[{tag:r.tag,properties:{type:"science"}}]}}}window.customElements.define(r.tag,r);export{r as ToggleContent};
