"use strict";var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e};!function(e,t){var i={};Plex.getAuthToken();Plex.debugLog()&&PlexUtils.getParam("token")&&PlexUtils.getParam("token");for(var a={data:function(){return{mediaverse:{init:!1,loading:!0,hubCached:i.hub_cached||!1,mediaverse:i.hub_mediaverse,endpoint:i.endpoint,hubLimit:i.hub_limit||!1,hubs:"",hubId:i.hub_id||"",hubInternalId:i.hubs||"",hubNotAvailable:!1,dummyHubLimit:i.hub_limit||6,userCountry:i.user_country||""}}},methods:{mvGetHubs:function(){var e=this,t=this;if("manual"===i.hubs)return void this.mvGenerateCustomHub();if(this.mediaverse.hubCached)return void this.mvGenerateCustomHub(this.mediaverse.hubCached);var a={headers:{Accept:"application/json","Content-Type":"application/json","X-WP-Nonce":plex_l10n.rest_api.nonce}},n=this.mediaverse.endpoint+"?country="+encodeURIComponent(this.mediaverse.userCountry);"livetv"===this.mediaverse.mediaverse?n+="&limit="+encodeURIComponent(parseInt(this.mediaverse.hubLimit)):i.hubs&&(n+="&identifier="+encodeURIComponent(i.hubs)),fetch(n,a).then(function(e){if(!e.ok)throw new Error("HTTP error! status: "+e.status);return e.json()}).then(function(e){if(!e.success)throw new Error(e);t.mvGenerateCustomHub(e.data),t.mediaverse.hubNotAvailable=!1}).catch(function(i){Plex.debugLog()&&console.error(i),t.mvResetState(),e.mediaverse.hubs=[],t.mediaverse.hubNotAvailable=!0})},mvGetDummyHub:function(){for(var e=this.mediaverse.dummyHubLimit,t=[],i={media_title:"",media_subtitle:"",media_attribution:"",media_thumb:"",media_slug:""},a=0;a<e;a++)t.push(i);this.mvGenerateCustomHub(t,!0)},mvGenerateCustomHub:function(e,t){var a=this;e=e||i.hub_media,t=t||!1;var n=this.mediaverse.hubLimit&&parseInt(this.mediaverse.hubLimit)<e.length?parseInt(this.mediaverse.hubLimit):e.length;this.mediaverse.hubs=[],this.mediaverse.hubs.push({title:i.hub_title,size:1,Metadata:[]});for(var s={title:"",slug:"",subtitle:"",attribution:"",thumb:"",url:""},u=0;u<n;u++){if(!t)if("livetv"===a.mediaverse.mediaverse)s=_extends({},s,{title:e[u].name,slug:e[u].slug,thumb:e[u].thumb,url:a.mvMediaverseEpgChannelURL(e[u].slug)});else{var r=e[u].media_attribution||!1;s=_extends({},s,{title:e[u].media_title,slug:e[u].media_slug,subtitle:e[u].media_subtitle||"",attribution:r?e[u].media_attribution.toLowerCase():"",thumb:decodeURIComponent(e[u].media_thumb),url:e[u].media_link})}this.mediaverse.hubs[0].Metadata.push(s)}t||(this.mediaverse.init=!0,this.mvResetState())},mvResetState:function(){this.mediaverse.loading=!1},mvDoLazyLoad:function(){this.$nextTick(function(){document.dispatchEvent(new Event("plexDoLazyload"))})},mvMediaverseEpgChannelURL:function(e){return PlexUtils.getMediaverseEpgChannelURL(e)},mvHubItemClick:function(e){var t={hubItemClickData:{hubId:this.mediaverse.hubInternalId,mediaverse:this.mediaverse.mediaverse,slug:e.slug,url:e.url,element:this.mediaverse.hubId}};PlexMetrics.pushEvent("plex.hubItemClick","",t)}},watch:{"mediaverse.init":function(){this.mvDoLazyLoad()}},mounted:function(){var e=this;e.mvGetDummyHub(),e.mvGetHubs()}},n=document.getElementsByClassName("plex-mediaverse-hub"),s=[],u=function(e){a.el="#"+e,i=plex_l10n_mv[e],new Vue(a),s.push(e)},r=0;r<n.length;r++)!function(e){var t=n[e].id;document.getElementById(t).classList.contains("lazyHub")?document.addEventListener("PlexLazyLoad",function(e){s.indexOf(t)>=0||e.detail.id===t&&e.detail.classList.contains("lazyHub")&&u(t)}):u(t)}(r)}(jQuery,window);