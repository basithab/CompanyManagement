let company = [];
let selectIndex = -1;
let clickedArray;
let select;

let index;
function init() {

  
    document.getElementById('tableRow').innerHTML = '';
    if (!localStorage.companyRecords) {
        data();
    }
    if (localStorage.companyRecords) {
        company = JSON.parse(localStorage.companyRecords);
        for (let i in company) {
            tablecell(
                i,
                company[i].name,
                company[i].email,
                company[i].phone,
                company[i].owner,
                company[i].street,
                company[i].city,
                company[i].state,
                company[i].country,
                company[i].duns,
                company[i].type
            )
        }
    }

    



    document.getElementsByClassName('deleteclass')[0].style.visibility = 'hidden';


    for (var i = 1; i <= 30; i++) {
        document.getElementsByClassName('editclass')[i].style.visibility = 'hidden';
        document.getElementsByClassName('deleteclass')[i].style.visibility = 'hidden';

    }



}

function data() {
    let companydata = [
        {
            name: "Hary",
            email: "hary@gmail.com",
            phone: 4144353292,
            owner: "Mike",
            street: "Bay area",
            city: "Houston",
            state: "texas",
            country: "USA",
            duns: 147258369,
            type: "buyer"


        }, {
            name: "Anny",
            email: "anny@gmail.com",
            phone: 4149306748,
            owner: "Jack",
            street: "Clear Lake",
            city: "Houston",
            state: "texas",
            country: "USA",
            duns: 147448588,
            type: "buyer"
        }, {
            name: "Vivek",
            email: "vivek@gmail.com",
            phone: 2347893242,
            owner: "Mathew",
            street: "main street",
            city: "Illinois",
            state: "texas",
            country: "USA",
            duns: 1777758369,
            type: "buyer"
        }, {
            name: "Esha",
            email: "esha@gmail.com",
            phone: 2347893232,
            owner: "Bhatia",
            street: "southwest",
            city: "manhattan",
            state: "New York",
            country: "USA",
            duns: 1472589999,
            type: "buyer"
        }, {
            name: "john",
            email: "john@gmail.com",
            phone: 4144353292,
            owner: "James",
            street: "Bay area",
            city: "Houston",
            state: "Texas",
            country: "USA",
            duns: 147258369,
            type: "Supplier"
        }, {
            name: "Anny",
            email: "mery@gmail.com",
            phone: 4149698956,
            owner: "Michael",
            street: "Clear Lake",
            city: "Houston",
            state: "Texas",
            country: "USA",
            duns: 147448588,
            type: "Supplier"

        }, {
            name: "Kathy",
            email: "kathy@gmail.com",
            phone: 4149698957,
            owner: "Michael",
            street: "main street",
            city: "Chicago",
            state: "Illinois",
            country: "USA",
            duns: 1777758369,
            type: "Supplier"

        }, {
            name: "Kamal",
            email: "kamal@gmail.com",
            phone: 2347893232,
            owner: "Jack",
            street: "southwest",
            city: "manhattan",
            state: "New York",
            country: "USA",
            duns: 1472589999,
            type: "Supplier"

        }

    ];
    localStorage.setItem('companyRecords', JSON.stringify(companydata));
}

function addCompany() {



    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    owner = document.getElementById('owner').value;
    street = document.getElementById('street').value;
    city = document.getElementById('city').value;
    state = document.getElementById('state').value;
    country = document.getElementById('country').value;
    duns = document.getElementById('duns').value;
    type = document.getElementById('type').value;





    if (validname(name) && ValidateEmail(email) && telephoneCheck(phone)) {

        let companyobj = {
            name: name,
            email: email,
            phone: phone,
            owner: owner,
            street: street,
            city: city,
            state: state,
            country: country,
            duns: duns,
            type: type

        };


        if (selectIndex === -1) {
            company.push(companyobj);
        } else {
            company.slice(selectedIndex, 1, companyobj);
        }

        localStorage.companyRecords = JSON.stringify(company);
        init();
        onclear();

    }

}

function tablecell(index, name, email, phone, owner, street, city, state, country, duns, type) {



    let table = document.getElementById('tableRow');
    let row = table.insertRow();

    let companynamecell = row.insertCell(0);
    let companyemailcell = row.insertCell(1);
    let companyphonecell = row.insertCell(2);
    let companyownercell = row.insertCell(3);
    let companystreetcell = row.insertCell(4);
    let companycitycell = row.insertCell(5);
    let companystatecell = row.insertCell(6);
    let companycountrycell = row.insertCell(7);
    let companydunscell = row.insertCell(8);
    let companytypecell = row.insertCell(9);
    let editcell = row.insertCell(10);
    let deletecell = row.insertCell(11);




    companynamecell.innerHTML = name;
    companyemailcell.innerHTML = email;
    companyphonecell.innerHTML = phone;
    companyownercell.innerHTML = owner;
    companystreetcell.innerHTML = street;
    companycitycell.innerHTML = city;
    companystatecell.innerHTML = state;
    companycountrycell.innerHTML = country;
    companydunscell.innerHTML = duns;
    companytypecell.innerHTML = type;


    editcell.innerHTML = '<input type="submit" id="editbtn" class="btn editclass " data-toggle="modal" data-target="#editProductModal" onclick="onEdit(' + index + ')" value="Edit">';
    deletecell.innerHTML = '<input type="submit" id="deletebtn" class="btn btn-danger deleteclass"   onclick="onDelete(' + index + ')" value="Delete">';

}


function onDelete(index) {

    company.splice(index, 1);

    localStorage.companyRecords = JSON.stringify(company);

    init();
}

function onEdit(index) {
    let currentCompany = company[index];
    clickedArray = index;
    document.getElementById('hiddentValue').value = clickedArray;
    document.getElementById('editName').value = currentCompany.name;
    document.getElementById('editEmail').value = currentCompany.email;
    document.getElementById('editPhone').value = currentCompany.phone;
    document.getElementById('editOwner').value = currentCompany.owner;
    document.getElementById('editStreet').value = currentCompany.street;
    document.getElementById('editCity').value = currentCompany.city;
    document.getElementById('editState').value = currentCompany.state;
    document.getElementById('editCountry').value = currentCompany.country;
    document.getElementById('editDuns').value = currentCompany.duns;
    document.getElementById('editType').value = currentCompany.type;

}

function onclear() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('owner').value = "";
    document.getElementById('street').value = "";
    document.getElementById('city').value = "";
    document.getElementById('state').value = "";
    document.getElementById('country').value = "";
    document.getElementById('duns').value = "";
    document.getElementById('type').value = "";

}

function onSaveEdit() {

    clickedArray = document.getElementById('hiddentValue').value
    name = document.getElementById('editName').value;
    email = document.getElementById('editEmail').value;
    phone = document.getElementById('editPhone').value;
    owner = document.getElementById('editOwner').value;
    street = document.getElementById('editStreet').value;
    city = document.getElementById('editCity').value;
    state = document.getElementById('editState').value;
    country = document.getElementById('editCountry').value;
    duns = document.getElementById('editDuns').value;
    type = document.getElementById('editType').value;


    company[clickedArray].name = name;
    company[clickedArray].email = email;
    company[clickedArray].phone = phone;
    company[clickedArray].owner = owner;
    company[clickedArray].street = street;
    company[clickedArray].city = city;
    company[clickedArray].state = state;
    company[clickedArray].country = country;
    company[clickedArray].duns = duns;
    company[clickedArray].type = type;


    localStorage.companyRecords = JSON.stringify(company);
    init();



}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function telephoneCheck(number) {
    if (/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(number)) {
        return true;
    }
    alert('Enter 10 digit number');
    return false;

}

function validname(name) {
    if (name != "") {
        return true;


    } else {
        return alert('Enter any Name');

    }

}

