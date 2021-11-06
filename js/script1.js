function change_image() {
    if (document.getElementById("random").alt == "ferrari") {
        document.getElementById("random").src = "../img/dog.jpeg" 
        document.getElementById("random").alt = "dog"
    } else if (document.getElementById("random").alt == "dog") {
        document.getElementById("random").src = "../img/skyscrapers.jpg" 
        document.getElementById("random").alt = "skyscrapers"
    } else if (document.getElementById("random").alt == "skyscrapers") {
        document.getElementById("random").src = "../img/golden-gate-bridge.jpg" 
        document.getElementById("random").alt = "golden gate bridge"
    } else if (document.getElementById("random").alt == "golden gate bridge") {
        document.getElementById("random").src = "../img/tiger.jpg" 
        document.getElementById("random").alt = "tiger"
    } else {
        document.getElementById("random").src = "../img/ferrari.jpeg" 
        document.getElementById("random").alt = "ferrari"
    }
}

var num_likes = 0;
function update_likes() {
    num_likes++;
    document.getElementById("like-info").innerHTML = 'Number of likes: ' + num_likes + '<br>';
}

var dict = {};
if (typeof (Storage) !== "undefined") {
    for (var key in localStorage) {
        try {
            var data = JSON.parse(localStorage.getItem(key));
            if (data.check === "ThisIsFormData") {
                document.getElementById('InsertHere').innerHTML += '<tr><td>' + key + '</td><td>' + data.skill +
                    '</td><td>' + data.level + '</td></tr>';
            }
        } 
        
        catch (err) {
            ;
        }
    }
}

function validateForm() 
{
    var x = document.forms["skillForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    x = document.forms["skillForm"]["skill"].value;
    if (x == "") {
        alert("Skill must be filled out");
        return false;
    }

    var x = document.forms["skillForm"]["level"].value;
    if (x == "") {
        alert("Proficiency must be filled out");
        return false;
    }

    addData();
    //reset();
    return false;
}

function addData() {
    var name = document.forms["skillForm"]["name"].value;
    var skill = document.forms["skillForm"]["skill"].value;
    var level = document.forms["skillForm"]["level"].value;
    var check = "ThisIsFormData";
    dict[name] = { skill, level, check };
    if (typeof (Storage) !== "undefined") 
    {
        localStorage.setItem(name, JSON.stringify(dict[name]));
    }
    document.getElementById('InsertHere').innerHTML += '<tr><td>' + name + '</td><td>' + skill +
        '</td><td>' + level + '</td></tr>';
}

function reset_form() {
    document.getElementById("name").value = "";
    document.getElementById("skill").value = "";
    document.getElementById("level").value = "";
}