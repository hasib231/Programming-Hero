const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const imageUrl = user.results[0].picture.large;
    const image = document.createElement('img');
    image.src = imageUrl;
    const container = document.getElementById('container');
    container.appendChild(image);


    const genderTag = document.getElementById('gender')
    genderTag.innerHTML = user.results[0].gender;

    const country = document.getElementById('country')
    country.innerHTML = user.results[0].location.country;

    const name = user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;
    console.log(user.results[0].location.country);
}

loadUser();

