async function search(){
    // console.log(inputValue.value);
    if(inputValue.value){
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)
    //   console.log(response);
    response.json().then((data)=>{
        console.log(data);

        const code = data.cod
        if(data.cod== 404){
            alert('Sorry ..! Place not found')
        }

        const mainitem = data.weather[0].main
        if(data.weather[0].main == 'Rain'){
            mainbody.style.backgroundImage = "url('https://www.icegif.com/wp-content/uploads/2021/10/icegif-453.gif'"
        mainbody.style.backgroundRepeat = "no-repeat"
        mainbody.style.backgroundSize = "cover"
        mainbody.style.backgroundPosition = "center"
        heading.style.color = "white"
        }
        else if(data.weather[0].main == 'Clouds'){
            mainbody.style.backgroundImage = "url('https://i.makeagif.com/media/8-08-2017/U8cAor.gif')"
        mainbody.style.backgroundRepeat = "no-repeat"
        mainbody.style.backgroundSize = "cover"
        mainbody.style.backgroundPosition = "center"
        heading.style.color = "white"
        }
        else if(data.weather[0].main == 'Sunny'){
            mainbody.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/014/388/781/non_2x/beautiful-cosmos-flower-with-blue-sky-the-sunny-background-free-photo.jpg')"
        mainbody.style.backgroundRepeat = "no-repeat"
        mainbody.style.backgroundSize = "cover"
        mainbody.style.backgroundPosition = "center"
        heading.style.color = "black"
        }
        else if(data.weather[0].main == 'Clear'){
            mainbody.style.backgroundImage = "url('https://i.gifer.com/embedded/download/1Unb.gif')"
        mainbody.style.backgroundRepeat = "no-repeat"
        mainbody.style.backgroundSize = "cover"
        mainbody.style.backgroundPosition = "center"
        heading.style.color = "black"
        }
        else if(data.weather[0].main == 'Mist'){
            mainbody.style.backgroundImage = "url('https://i.makeagif.com/media/10-16-2018/rjxI8k.gif')"
        mainbody.style.backgroundRepeat = "no-repeat"
        mainbody.style.backgroundSize = "cover"
        mainbody.style.backgroundPosition = "center"
        heading.style.color = "white"
        }
        else if(data.weather[0].main == 'Haze'){
            mainbody.style.backgroundImage = "url('https://i.makeagif.com/media/10-16-2018/rjxI8k.gif')"
        mainbody.style.backgroundRepeat = "no-repeat"
        mainbody.style.backgroundSize = "cover"
        mainbody.style.backgroundPosition = "center"
        heading.style.color = "black"
        }
        else if(data.weather[0].main == 'Snow'){
            mainbody.style.backgroundImage = "url('https://64.media.tumblr.com/b67e6aea949be7ad1bcf18b5e497f231/599d6acdeb3ae959-b8/s640x960/41cee083e48f733ddb83ba68a7883ad643d3ea34.gif')"
        mainbody.style.backgroundRepeat = "no-repeat"
        mainbody.style.backgroundSize = "cover"
        mainbody.style.backgroundPosition = "center"
        heading.style.color = "black"
        }
        else {
            mainbody.style.backgroundImage = "url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg')"
        mainbody.style.backgroundRepeat = "no-repeat"
        mainbody.style.backgroundSize = "cover"
        mainbody.style.backgroundPosition = "center"
        heading.style.color = "black"
        }

        console.log(mainitem);

        const name = data.name
        console.log(name);

        
        
        // const temp = Math.floor(((data.main.temp)-32)*5/9)
        const temp = Math.floor((data.main.temp)-273.15)
        console.log(temp);

        const hum = data.main.humidity
        console.log(hum);

        const feels = Math.floor((data.main.feels_like)-273.15)
        console.log(feels);
        
        const country = data.sys.country
        console.log(country);

        let currentDate = new Date()
        let year = currentDate.getFullYear()

        let months = ["January", "February", "March", "April", "May", "June" , "July" , "August", "September", "October", "November", "December"]
        let monthName = months[currentDate.getMonth()]

        let date = currentDate.getDate() 
        let hours = currentDate.getHours()
        let minutes = currentDate.getMinutes()
        // let sec = currentDate.getSeconds()
        console.log(` ${date} ${monthName} ${year} ${hours}:${minutes} `);
        
        
        const windSpeed = Math.floor(data.wind.speed)
        console.log(windSpeed);
        

        const pressure = data.main.pressure
        console.log(pressure);



            result.innerHTML=`<div class=" text-center mt-4 ">
                        <h1 style="font-family: Dancing Script, cursive, Times, serif; font-weight: 600;color: rgb(228, 227, 227);">${name}</h1>
                        <h2 style="color: aliceblue;font-family: Dancing Script, cursive, Times, serif;">${country}</h2>
                       <img id="icon" src="./images/weather-icon-png-25-removebg-preview.png" class="w-25 mt-4" alt="">
                        <h4 style="color: aliceblue;font-family: Dancing Script, cursive, Times, serif;">${mainitem}</h4>
                        <h2 style="color: aliceblue;font-family: Dancing Script, cursive, Times, serif;">${temp} °C</h2>
                        <p style="color: aliceblue;font-family: Dancing Script, cursive, Times, serif;">${date} ${monthName} ${year} , ${hours}:${minutes} ${hours>12 ? `PM` : `AM`}  IST </h5>
                            <hr style="color: aliceblue;">
                    </div>

                    <div class="row d-flex text-center">
                        <div class="col-6 p-2">
                            <div class="d-flex">
                                <img src="./images/1000_F_304781665_WGgUVlAoqepgknMwo8WqMp1hCMYLo2pA-removebg-preview.png" class="w-25" alt="">
                                <h5 class="d-flex align-items-end" style="color:rgb(228, 227, 227);font-family: Dancing Script, cursive, Times, serif;">${hum}%</h5>
                            </div>
                                <div>
                                    <h6 style="color:rgb(228, 227, 227);font-family: Dancing Script, cursive, Times, serif;font-weight: bold;">Humidity</h6>
                                </div>     
                        </div>
                       
                        <div class="col-6 p-2">
                           <div class="d-flex">
                                <img src="./images/thermometer-icon-high-temperature-symbol-vector-6547358-removebg-preview.png" class="w-25" alt="">
                                <h5 class="d-flex align-items-end" style="color: rgb(228, 227, 227);font-family: Dancing Script, cursive, Times, serif;">${feels} %</h5>
                            </div>
                                <div>
                                    <h6 style="color:rgb(228, 227, 227);font-family: Dancing Script, cursive, Times, serif;font-weight: bold;">Feels-like</h6>
                                </div>    
                        </div>
                    </div>
                    <div class="row d-flex text-center">
                        <div class="col-6 p-2">
                            <div class="d-flex">
                                <img src="./images/png-transparent-atmospheric-pressure-computer-icons-gas-bar-pressure-miscellaneous-atmosphere-engineering-removebg-preview.png" class="w-25" alt="">
                                <h5 class="d-flex align-items-end" style="color: rgb(228, 227, 227);font-family: Dancing Script, cursive, Times, serif;">${pressure} mbar</h5>
                            </div>
                                <div>
                                    <h6 style="color: rgb(228, 227, 227);font-family: Dancing Script, cursive, Times, serif;font-weight: bold;">Pressure</h6>
                                </div>     
                        </div>
                        
                        <div class="col-6 p-2">
                            <div class="d-flex">
                                <img src="./images/pngtree-vector-wind-icon-png-image_884000-removebg-preview.png" class="w-25" alt="">
                                <h5 class="d-flex align-items-end" style="color: rgb(228, 227, 227);font-family: Dancing Script, cursive, Times, serif;">${windSpeed} km/h</h5>
                            </div>
                                <div>
                                    <h6 style="color: rgb(228, 227, 227);font-family: Dancing Script, cursive, Times, serif;font-weight: bold;">Wind-speed</h6>
                                </div>     
                        </div>
                    </div>`

    })
      
    }
    else{
        alert(`Please enter a city name`)
    }
}


