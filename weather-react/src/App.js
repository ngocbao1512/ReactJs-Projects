import React, {useState} from 'react'

const api = {
  key: 'aca77a8aeb67074c6cd801f3cfe6e46e',
  base: "https://openweathermap.org/data/2.5",

}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('');
          console.log(weather)
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Bốn", "Tháng Năm", "Tháng Sáu",
    "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai" ];

    let days = ["Chủ Nhật","Thứ hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} Ngày ${date} ${month} Năm ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") 
    ? ((weather.main.term > 16) ? 'app warm' : 'app') 
    : 'app'}>
        <main>
            <div className="search-box">
              <input 
              type="text"
              className="search-bar"
              placeholder="Search...."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}

              />
            </div>

            {(typeof weather.main != "undefined") ? (
            <div> 
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>

              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)} độ c
                </div>

                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
            ) : ('')}
           
        </main>
    </div>
  );
}

export default App;
