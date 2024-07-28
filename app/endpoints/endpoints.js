export const getData = async (country) => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${process.env.KEY_ID}`);
    return res.json();
}
