export default class profile {
    constructor(id, name, gender, age, height, location, image, premium) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.location = location;
        this.image = image;
        this.premium = premium;
    }
    Render() {
        temp = "";
        temp = 
        `
       <div class="row">
            <div id="PersonImg" class="col-sm-12">
<div id="userCardforDOM">
                <img class="img-fluid rounded mx-auto d-block" src="${this.image}" />
                <p id="userName"> ${this.name}</p>
                <p id="userAge"> ${this.age}</p>
                <p id="height"> ${this.height}</p>
                <p id="userLocation"> ${this.location}</p>
                <!--<p id="Hobbies"> Amir</p>-->

               


                </div>
            </div>

        </div>
        
         `   
    }
}
