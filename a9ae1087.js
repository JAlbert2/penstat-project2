import{r as e,y as t}from"./4be38cb8.js";import{S as r}from"./081fea73.js";class s extends r{static get tag(){return"card-header"}static get styles(){return[...super.styles,e`:host{display:block}.banner-wrapper{background-color:var(--simple-colors-default-theme-accent-6)}`]}static get properties(){return{...super.properties,type:{type:String},icon:{type:String}}}constructor(){super(),this.accentColor="red",this.dark=!1,this.type="objective",this.icon="lightbulb"}updated(e){super.updated(e),e.forEach(((e,t)=>{"type"===t&&"objective"===this[t]&&(this.icon="lightbulb",this.accentColor="orange"),"type"===t&&"science"===this[t]&&(this.icon="beaker",this.accentColor="green"),"type"===t&&"question"===this[t]&&(this.icon="question",this.accentColor="blue")}))}render(){return t` <div class="banner-wrapper"> <card-icon type="${this.icon}"></card-icon> <div class="header-wrapper"> <slot name="header"></slot> <slot name="subheader"></slot> </div> </div> `}}customElements.define(s.tag,s);export{s as CardHeader};
