React - Vite / 【特集ページ】スプレッドシートベースのセールページ作成<br/>
ビルドツールを CRA ではなく Vite で作成しました。デプロイ時に CRA では行わない設定をする必要があったため、そこだけ手間取りました。<br/>
<br/>
Web ページができないメンバーでもセールページが更新できるよう、Google スプレッドシートを CMS としています。<br/>
<br/>
仕組みとしては、愛用している SSSAPI でスプレッドシートから API 形式でデータを取得しています。<br/>
以前作成したものはスプレッドシート内でクエリを作成し、複数の API として出力していましたが今回は API を一つにまとめ、商品のカテゴリ分け等は Javascript で行なったため、通信の回数を減らすことができ、更に高速になりました。<br/>