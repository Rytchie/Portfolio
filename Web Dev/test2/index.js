class Person {
    
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}


class address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }

}

const person1 = new Person("Rytchie", 30, "124 Const Coach", 
                                            "Bikini Bottom", 
                                            "Int. Waters")




console.log(person1.address);