export default async function handler(req, res) {
  if (req.method === 'POST') {
    // 1. 届いた内容をコンソール（Vercelの管理画面）に記録
    console.log("--- New Post Log ---");
    console.log("Query:", req.query);
    console.log("Body:", req.body);
    console.log("Headers:", req.headers);

    // 2. ログを永続化したい場合（外部サービスへ飛ばす例）
    // 本来はここでDBやGASにデータを送る処理を書きます
    
    // 3. レスポンスを返す
    res.status(200).send("BBS Posted");
  } else {
    // POST以外は405 Method Not Allowed
    res.status(405).send("Method Not Allowed");
  }
}