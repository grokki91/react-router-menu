import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Menu() {
  return(
    <nav className="menu">
      <Link className="menu__item" to="/">Главная</Link>
      <Link className="menu__item" to="/drift" >Дрифт-такси</Link>
      <Link className="menu__item" to="/timeattack">Time Attack</Link>
      <Link className="menu__item" to="/forza">Forza Karting</Link>
    </nav>
  )
}

function HomePage() {
  return (
    <article className="article">
      <h1 className="article__title">Гоночн​ое такси</h1>
      <p className="article__paragraph">
        Гоночн​ое такси – отличная возможность насладиться скоростью и мастерством гонщика,
        сидя на месте штурмана, и стать свидетелем настоящего мастерства профессиональных
        инструкторов Сочи Автодрома, в полной мере ощутив крутые виражи на самой современной
        гоночной трассе России.
      </p>
    </article>
  )
}

function DriftPage() {
  return (
    <article className="article">
      <h1 className="article__title">Дрифт-такси</h1>
      <p className="article__paragraph">
        Только ​на Сочи Автодроме вас ждет уникальная возможность
        промчаться по трассе Формулы 1 на максимально возможной
        скорости в управляемом заносе на легендарной «королеве дрифта» Nissan Silvia!
      </p>
      <p className="article__paragraph">
        Прокатитесь на дрифт-такси с вице-чемпионом Межконтинентального
        кубка по дрифту под эгидой FIA 2017 года Аркадием Цареградцевым и
        испытайте на себе, что значат скоростные постановки и эффектные заносы!
      </p>
    </article>
  )
}

function ForzaPage() {
  return (
    <article className="article">
      <h1 className="article__title">Forza Karting Sochi</h1>
      <p className="article__paragraph">
        В Олимпийском парке работает новый открытый развлекательный картинг центр мирового уровня!
      </p>
      <p className="article__paragraph">
        Вас ждут большая, широкая, безопасная трасса и супер современные карты
        европейского производства c двигателями мощностью 13 л.с.
        Трасса длинной более 500 метров  оборудована системой хронометража,
        фиксирующей данные заезда в режиме реального времени.
        По окончании заезда каждый пилот получает распечатку со своими результатами.
      </p>
    </article>
  )
}

function TimeAttackPage() {
  return (
    <article className="article">
      <h1 className="article__title">Гонка ​​​​​​Time Attack</h1>
      <p className="article__paragraph">
        Гонка Time Attack создана для тех, кто любит ставить рекорды –
   открытое соревнование на гражданских автомобилях не предполагает
   контактной борьбы пилотов во время заезда, но позволит в полной мере
   ощутить скорость, найти идеальную траекторию и реализовать весь
   потенциал своего автомобиля. Каждый участник проезжает по Сочи Автодрому
   определённое количество кругов, а в зачёт идёт только лучшее время одного
   круга из всех заездов. Для того, чтобы попробовать свои силы на лучшей
   гоночной трассе страны, Вам понадобится исправный легковой автомобиль
   на летних шинах и шлем.
      </p>
    </article>
  )
}


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}