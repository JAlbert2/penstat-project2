import{r as e,p as t}from"./7227f386.js";import{S as r}from"./eba45357.js";class s extends r{static get tag(){return"card-header"}static get styles(){return[...super.styles,e`:host{display:block;font-family:'Open Sans',sans-serif;color:#fff;border:1px transparent}.banner-wrapper{background-color:var(--simple-colors-default-theme-accent-7)}`]}static get properties(){return{...super.properties,type:{type:String},icon:{type:String}}}constructor(){super(),this.accentColor="red",this.dark=!1,this.type="objective",this.icon="lightbulb"}updated(e){super.updated(e),e.forEach(((e,t)=>{"type"===t&&"objective"===this[t]&&(this.icon="objective",this.accentColor="orange"),"type"===t&&"science"===this[t]&&(this.icon="science",this.accentColor="green"),"type"===t&&"question"===this[t]&&(this.icon="question",this.accentColor="blue")}))}render(){return t` <div class="banner-wrapper" style="display:flex"> <card-icon type="${this.icon}" style="width:100px"></card-icon> <div class="header-wrapper"> <slot name="header"></slot> <slot name="subheader"></slot> </div> </div> `}}customElements.define(s.tag,s);export{s as CardHeader};
