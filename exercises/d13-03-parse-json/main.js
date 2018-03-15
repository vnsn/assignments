function parsePokemon() {
    var myList = document.getElementById("mylist");
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonData = xhr.responseText;
            var data = JSON.parse(jsonData);
            var poke = data.objects[0].pokemon;

            // console.log(data);

            poke.forEach(function(myObj) {
                var li = document.createElement("li");
                li.innerHTML = myObj.name;
                myList.appendChild(li);
            })

            // To do with for loop instead of .forEach: 
            // for (var i = 0; i < poke.length; i++) {
            //     var myObj = poke[i];
            //     var li = document.createElement("li");
            //     li.innerHTML = myObj.name;
            //     myList.appendChild(li);
            // }
        }
    }

    xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
    xhr.send();
}

parsePokemon();

/* 
The callback function you put in .forEach is rarely a pure function.
You're usually just doing stuff like printing vs changing the array.
*/