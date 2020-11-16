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
		<link rel="stylesheet" href="https://hidao80.github.io/curatiodon/css/reset.css">
		<link rel="stylesheet" href="https://hidao80.github.io/curatiodon/css/style.css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" media="print" onload="this.media='all'" crossorigin="anonymous">
		<script type="module" src="https://hidao80.github.io/curatiodon/js/p.js"></script>
		<script type="module" src="https://hidao80.github.io/curatiodon/js/common.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js" integrity="sha384-2HZQgruoZ9WYoMX2ggiDbr1oZdeQIiVXLXeyZLJ1JgiOugVLfDyNe3st/Kop/dUT" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/locale/ja.js" integrity="sha384-h3h67ZYwnvJddRXlzzN25+eKR7zijWgh/X66RNXeL0BTK36QQT72uAJbDK0zG9HH" crossorigin="anonymous"></script>
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Courgette&family=Open+Sans&display=swap" rel="stylesheet">
	</head>
	<body>`;
	html += document.body.innerHTML;
	html += `</body>
	</html>`;

	return html;
}

/**
 * HTMLファイルのダウンロード
 */
async function downloadHTMLFile(e) {
	for (let i = 2; i <= 100; i++) {
		let result = await impl.showCards(impl.decodePermalink(new URLSearchParams(location.search), 10)).catch(err => console.error(err));
	}
	
  // アンカータグの作成
  const downLoadLink = document.createElement("a");

  // ダウンロードするHTML文章の生成
	const outputDataString = getOutputHTML();
  const downloadFileName = "index.html";
  downLoadLink.download = downloadFileName;
  downLoadLink.href = URL.createObjectURL(new Blob([outputDataString], {type: "text/html"}));
  downLoadLink.dataset.downloadurl = ["text/html", downloadFileName, downLoadLink.href].join(":");
  downLoadLink.click();
}

impl.ready(() => {
	showPreview();
	impl.$("btnload").addEventListener("click", showPreview);
	impl.$("btndownload").addEventListener("click", downloadHTMLFile);
});
