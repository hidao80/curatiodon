import * as impl from "./common.js";
async function showPreview() {
	impl.showCards(impl.decodePermalink(new URLSearchParams(location.search), 10)).catch(err => console.error(err));
}

/**
 * ID を入れると DOM Element を返す
 */
function getOutputHTML() {
	let html = `<!DOCTYPE html>
	<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>curatiodon - キュレーショドン</title>
		<style>
		abbr,address,article,aside,audio,b,blockquote,body,canvas,caption,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,samp,section,small,span,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,ul,var,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:0 0}body{line-height:1}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:0 0}ins{background-color:#ff9;color:#000;text-decoration:none}mark{background-color:#ff9;color:#000;font-style:italic;font-weight:700}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}button,input,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}body{background-color:#f6f6f4;font-family:sans-serif}p{margin-block-start:1em;margin-block-end:1em;margin-inline-start:0;margin-inline-end:0;margin-top:1em;margin-bottom:1em;margin-left:0;margin-right:0}header{width:100%;height:57px;background-color:orange;align-items:center}header h1{display:inline}header h1 a{font-size:2.3rem;color:#fff;font-family:Courgette,cursive;text-decoration:none}header h1 a:active,header h1 a:hover,header h1 a:link,header h1 a:visited{color:#fff}header+div,header>div{width:80%;margin:auto}header+div{padding-top:1rem}.toot{display:flex;padding:10px;margin-bottom:20px;width:100%;border-bottom:solid 1px silver}.container{display:flex}.flex-center{justify-content:center;flex-wrap:wrap}.flex-column{flex-direction:column}#matomain{width:60%}#btnload{display:inline-block;margin:0 0 0 auto}#btndownload{margin:0 0 0 auto}.area{width:44.5%;padding:2vh 2vw;background-color:#fff}div.area>div{display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:10px}div.area>div p,div.area>div p input[type=text]{width:100%}.area:nth-child(2)>div:first-child{border-bottom:solid 1px #d3d3d3}.area label:after{content:"\a";white-space:pre}#domainid{margin-top:1em}#domainid p{flex-basis:48%}#copylink,#urlshorten{margin-left:10px;word-break:keep-all}.preview-inner{border:1px dashed #aaa;padding:20px;width:100%}.readme-md{padding:.5em}button{font-size:15px;padding:.5em;border-style:none;border-radius:.5em;background-color:orange;color:#fff;box-shadow:none;cursor:pointer}.btn-frame{border:solid 2px #fff;vertical-align:bottom;padding:4px}button:last-child{margin-left:auto}button:focus{outline:0}.box:last-of-type{padding-left:10px;flex-grow:1}.box img{border-radius:5px}.e-content p{word-break:break-word}img.emoji{width:20px;height:20px;vertical-align:middle}img.thumbs{width:auto;height:auto;max-width:100%;max-height:100%}.display-name,.toot-time{font-weight:700;color:inherit;display:inline-block;text-decoration:none}.display-name:hover,.toot-time:hover{text-decoration:underline currentColor}.display-name span,.toot-time{font-weight:400;color:silver;font-size:smaller}.display-name span:before,.toot-time:before{white-space:pre-wrap;content:"  "}div.area>div>p{display:flex;flex-direction:column;position:relative}input[type=text]{font-size:15px;flex-grow:1;padding:.5em .5em .5em .5em;border:1px solid #aaa;background-color:#fff;border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:#333}label{font-size:15px;padding-top:10px;padding-bottom:15px;color:#000;line-height:1;position:relative}label>i{color:#a9a9a9;margin-left:.25rem}label>i:hover{color:gray;margin-left:.25rem}.hint{display:none;font-size:.8rem;position:absolute;width:fit-content;width:-moz-fit-content;word-break:keep-all;bottom:100%;right:0;padding:.5em 1em .4em;border-radius:5px;color:transparent}i:hover .hint{display:block;animation-name:appear;animation-duration:.3s;animation-fill-mode:forwards;animation-timing-function:ease-out}.sensitive{filter:blur(15px)}.sensitive:hover{filter:none}.introjs-helperNumberLayer{top:-16px!important;left:-16px!important}.introjs-button{color:#000!important}@keyframes appear{from{background-color:transparent;border:1px solid transparent;color:transparent}to{background-color:#f6faf2;border:1px solid #34830499;color:#348304}}@media screen and (max-width:899px){.area{width:90vw;height:auto}#matomain{width:100%}.hint{font-size:.6rem}}@media screen and (max-width:669px){.hint{right:-8vw;font-size:2vw}#card-preview,.area a,.area input[type=text],button,label{font-size:10px}}
		</style>
	</head>
	<body>`;
	html += document.body.innerHTML;
	html += `</body>
	</html>`;
	
	const matches = html.match(/https?:\/\/[\w\/:%#\$&\?\(\)~\.=\+\-]+\.(png|jpg|jpeg|gif|mp4)/ig);

	matches.forEach(url => {
		console.log(url);
		fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.blob();
		})
		.then(myBlob => {
			const replaceValue = URL.createObjectURL(myBlob);
			console.log(replaceValue);
			html.replace(url, replaceValue);
		})
		.catch(error => {
			console.error('There has been a problem with your fetch operation:', error);
		});
	});

	return html;
}

impl.ready(() => {
	showPreview();
	impl.$("btnload").addEventListener("click", showPreview);
});
