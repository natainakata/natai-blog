import Container from "../_components/container";

export default function About() {
  return (
    <main>
      <Container>
        <div className="mt-12 text-center md:text-4xl text-3xl">
          <h2>Natai Nakata</h2>
          <p>Program And TCG</p>
        </div>
        <div className="mt-8 text-left mx-auto w-2/3">
          <div className="mt-4">
            <h3 className="text-lg">あいさつ</h3>
            <p className="mt-2">
              中田なたいと申します。
              <br />
              普段は
              <a href="https://mk.shrimpia.network" target="_blank">
                シュリンピア帝国
              </a>
              で活動しているプログラマー志望のカードゲーマーです。
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg">趣味とか</h3>
            <p className="mt-2">
              現在のメインは遊戯王OCG,デュエルマスターズです。
              <br />
              その他、Modded
              Minecraft,モンスターハンター,ガンダムシリーズなども擦っています。
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
