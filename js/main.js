function loading(){
    window.addEventListener('load',function(){
        $('.loading').fadeOut(500,function(){
            $('body').css('overflow','visible');
        });
    });
}
loading();
let allFood,foodName,areas,filtter,filtterdet,ing,filtterIng,filtterdetIng,foodCategories,filtterCate,filtterdetCate;
let req=new XMLHttpRequest();
req.open('get','https://www.themealdb.com/api/json/v1/1/search.php?s=');
req.send();
req.addEventListener('loadend',function(){
    if(req.status==200){
        allFood=JSON.parse(req.response);
        loading();
        display(allFood);
    }
})
function display(food){
    let cartona="";
    for(let i=0;i<food.meals.length;i++){
        cartona+=`
        <div class="col-lg-3 py-3 test1 ">
        <div class="card position-relative" onclick="details(${i});">
        <img src=${food.meals[i].strMealThumb} alt="not found">
        <div class="position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-start align-items-center p-3 con"><h3>${food.meals[i].strMeal}</div>
        </div>
    </div>
        `
    }
    document.querySelector('.row').innerHTML=cartona;
}
function details(i){
    let card = document.querySelectorAll('.card');
    for(let x=0;x<card.length;x++){
    card[x].addEventListener('click',function(){
        let one=document.querySelectorAll('.test1');
        for(let j=0;j<one.length;j++){
            one[j].classList.add('d-none');
        }
    })
}
    cartona=`
    <div class="col-lg-4 test2">
        <div class="imgeSide">
            <img src=${allFood.meals[i].strMealThumb} alt="not found">
            <h3 class="p-1">${allFood.meals[i].strMeal}</h3>
        </div>
    </div>
    <div class="col-lg-8 test3">
        <div class="content">
            <h3>Instructions</h3>
            <p>${allFood.meals[i].strInstructions}</p>
            <h3>Area : ${allFood.meals[i].strArea}</h3>
            <h3>Category : ${allFood.meals[i].strCategory}</h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure1+allFood.meals[i].strIngredient1)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure2+allFood.meals[i].strIngredient2)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure3+allFood.meals[i].strIngredient3)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure4+allFood.meals[i].strIngredient4)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure5+allFood.meals[i].strIngredient5)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure6+allFood.meals[i].strIngredient6)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure7+allFood.meals[i].strIngredient7)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure8+allFood.meals[i].strIngredient8)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure9+allFood.meals[i].strIngredient9)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure10+allFood.meals[i].strIngredient10)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure11+allFood.meals[i].strIngredient11)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure12+allFood.meals[i].strIngredient12)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure13+allFood.meals[i].strIngredient13)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure14+allFood.meals[i].strIngredient14)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure15+allFood.meals[i].strIngredient15)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure16+allFood.meals[i].strIngredient16)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure17+allFood.meals[i].strIngredient17)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure18+allFood.meals[i].strIngredient18)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure19+allFood.meals[i].strIngredient19)}</li>
                <li class="alert alert-info m-2 p-1">${valid(allFood.meals[i].strMeasure20+allFood.meals[i].strIngredient20)}</li>
            </ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-danger m-2 p-1 valid">${valid(allFood.meals[i].strTags)}</li>
            </ul>
            <a target="_blank" href="${allFood.meals[i].strSource}" class="btn btn-success my-2">Source</a>
            <a target="_blank" href="${allFood.meals[i].strYoutube}" class="btn btn-danger my-2">Youtube</a>
        </div>
    </div>

    `
    document.querySelector('.row').innerHTML=cartona;
    check();
}
function valid(x){
    if(x!=null && x!=" "&& x!=""){
        return x;
    }
    else
    {
        return "";
    }

}
function none(){
    let bigNavbarWidth=$('.bigNavbar').innerWidth();
    if($('.bigNavbar').css('left')=='0px'){
        $('.bigNavbar').animate({left:-200},1000);
        $('.navv').animate({left:0},1000);
        document.querySelector('.icon').innerHTML=`<i class="fa-solid fa-bars fa-2x text-black" onclick="none();"></i>`;
    }
    else{
        $('.bigNavbar').animate({left:0},1000);
        $('.navv').animate({left:200},1000);
        document.querySelector('.icon').innerHTML=`<i class="fa-solid fa-xmark fa-2x text-black" onclick="none();"></i>`;
    }
}
function search(){
document.querySelector('.main').classList.add('d-none');
document.querySelector('.areaPage').classList.add('d-none');
document.querySelector('.ingradientsPage').classList.add('d-none');
document.querySelector('.categoryPage').classList.add('d-none');
document.querySelector('.conactPage').classList.add('d-none');
none();
document.querySelector('.searchPage').classList.remove('d-none');
}
function displaySearchByName(x){
    let req=new XMLHttpRequest();
    req.open('get',`https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`);
    req.send();
    req.addEventListener('loadend',function(){
        if(req.status==200){
            foodName=JSON.parse(req.response);
            let cartona="";
            for(let i=0;i<foodName.meals.length;i++){
        cartona+=`
        <div class="col-lg-3 py-3 test12 ">
        <div class="card2 position-relative" onclick="detailsSearch(${i});">
        <img src=${foodName.meals[i].strMealThumb} alt="not found">
        <div class="position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-start align-items-center p-3 con"><h3>${foodName.meals[i].strMeal}</div>
        </div>
    </div>
        `
    }
    document.querySelector('.fatma').innerHTML=cartona;
        }
    })
}
function detailsSearch(i){
    document.querySelector('.inputSearch').classList.add('d-none')
    let card = document.querySelectorAll('.card2');
    for(let x=0;x<card.length;x++){
    card[x].addEventListener('click',function(){
        let one=document.querySelectorAll('.test12');
        for(let j=0;j<one.length;j++){
            one[j].classList.add('d-none');
        }
    })
}
    cartona=`
    <div class="col-lg-4 test2">
        <div class="imgeSide">
            <img src=${foodName.meals[i].strMealThumb} alt="not found">
            <h3 class="p-1">${foodName.meals[i].strMeal}</h3>
        </div>
    </div>
    <div class="col-lg-8 test3">
        <div class="content">
            <h3>Instructions</h3>
            <p>${foodName.meals[i].strInstructions}</p>
            <h3>Area : ${foodName.meals[i].strArea}</h3>
            <h3>Category : ${foodName.meals[i].strCategory}</h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure1+foodName.meals[i].strIngredient1)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure2+foodName.meals[i].strIngredient2)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure3+foodName.meals[i].strIngredient3)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure4+foodName.meals[i].strIngredient4)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure5+foodName.meals[i].strIngredient5)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure6+foodName.meals[i].strIngredient6)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure7+foodName.meals[i].strIngredient7)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure8+foodName.meals[i].strIngredient8)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure9+foodName.meals[i].strIngredient9)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure10+foodName.meals[i].strIngredient10)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure11+foodName.meals[i].strIngredient11)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure12+foodName.meals[i].strIngredient12)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure13+foodName.meals[i].strIngredient13)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure14+foodName.meals[i].strIngredient14)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure15+foodName.meals[i].strIngredient15)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure16+foodName.meals[i].strIngredient16)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure17+foodName.meals[i].strIngredient17)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure18+foodName.meals[i].strIngredient18)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure19+foodName.meals[i].strIngredient19)}</li>
            <li class="alert alert-info m-2 p-1">${valid(foodName.meals[i].strMeasure20+foodName.meals[i].strIngredient20)}</li>
            </ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-danger m-2 p-1 valid">${valid(allFood.meals[i].strTags)}</li>
            </ul>
            <a target="_blank" href="${foodName.meals[i].strSource}" class="btn btn-success my-2">Source</a>
            <a target="_blank" href="${foodName.meals[i].strYoutube}" class="btn btn-danger my-2">Youtube</a>
        </div>
    </div>

    `
    document.querySelector('.fatma').innerHTML=cartona;
    check();
}
function displaySearchByFirstLetter(x){
    let request=new XMLHttpRequest();
    request.open('get',`https://www.themealdb.com/api/json/v1/1/search.php?f=${x}`);
    request.send();
    request.addEventListener('loadend',function(){
    if(request.status==200){
        foodName=JSON.parse(request.response);
        let cartona="";
            for(let i=0;i<foodName.meals.length;i++){
        cartona+=`
        <div class="col-lg-3 py-3 test12 ">
        <div class="card2 position-relative" onclick="detailsSearch(${i});">
        <img src=${foodName.meals[i].strMealThumb} alt="not found">
        <div class="position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-start align-items-center p-3 con"><h3>${foodName.meals[i].strMeal}</div>
        </div>
    </div>
        `
    }
    document.querySelector('.fatma').innerHTML=cartona;
    }
})

}
function area(){
    document.querySelector('.main').classList.add('d-none');
    document.querySelector('.ingradientsPage').classList.add('d-none');
    document.querySelector('.categoryPage').classList.add('d-none');
    document.querySelector('.conactPage').classList.add('d-none');
    document.querySelector('.searchPage').classList.add('d-none');
    none();
    document.querySelector('.areaPage').classList.remove('d-none');
    let req=new XMLHttpRequest();
    req.open('get','https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    req.send();
    req.addEventListener('loadend',function(){
    if(req.status==200){
        areas=JSON.parse(req.response);
        let cartona="";
        for(let i=0;i<areas.meals.length;i++){
        cartona+=`
        <div class="col-lg-3">
        <div class="area p-4 text-center" onclick="displayArea('${areas.meals[i].strArea}');">
            <div class="top">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
            </div>
            <div class="content">
                <h3>${areas.meals[i].strArea}</h3>
            </div>
        </div>
    </div>
        `
    }
    loading();
    document.querySelector('.nada').innerHTML=cartona;
    }
})

}
function displayArea(name){
    let reqq=new XMLHttpRequest();
    reqq.open('get',`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
    reqq.send();
    reqq.addEventListener('loadend',function(){
        if(reqq.status==200){
            filtter=JSON.parse(reqq.response);
            document.querySelector('.nada').classList.add('d-none');
            document.querySelector('.filtter').classList.remove('d-none');
            let cartona="";
            for(let i=0;i<filtter.meals.length;i++){
                cartona+=`
                <div class="col-lg-3 py-3 test1 ">
                <div class="card position-relative" onclick="detailsFiltter('${filtter.meals[i].idMeal}');">
                <img src=${filtter.meals[i].strMealThumb} alt="not found">
                <div class="position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-start align-items-center p-3 con"><h3>${filtter.meals[i].strMeal}</div>
                </div>
            </div>
                `
            }
            loading();
            document.querySelector('.filtter').innerHTML=cartona;
        }
    })
    
}
function detailsFiltter(v){
    let req=new XMLHttpRequest();
    req.open('get',`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${v}`);
    req.send();
    req.addEventListener('loadend',function(){
        if(req.status==200){
            filtterdet=JSON.parse(req.response);
            loading();
            cartona=`
    <div class="col-lg-4 test2">
        <div class="imgeSide">
            <img src=${filtterdet.meals[0].strMealThumb} alt="not found">
            <h3 class="p-1">${filtterdet.meals[0].strMeal}</h3>
        </div>
    </div>
    <div class="col-lg-8 test3">
        <div class="content">
            <h3>Instructions</h3>
            <p>${filtterdet.meals[0].strInstructions}</p>
            <h3>Area : ${filtterdet.meals[0].strArea}</h3>
            <h3>Category : ${filtterdet.meals[0].strCategory}</h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure1+filtterdet.meals[0].strIngredient1)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure2+filtterdet.meals[0].strIngredient2)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure3+filtterdet.meals[0].strIngredient3)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure4+filtterdet.meals[0].strIngredient4)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure5+filtterdet.meals[0].strIngredient5)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure6+filtterdet.meals[0].strIngredient6)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure7+filtterdet.meals[0].strIngredient7)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure8+filtterdet.meals[0].strIngredient8)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure9+filtterdet.meals[0].strIngredient9)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure10+filtterdet.meals[0].strIngredient10)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure11+filtterdet.meals[0].strIngredient11)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure12+filtterdet.meals[0].strIngredient12)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure13+filtterdet.meals[0].strIngredient13)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure14+filtterdet.meals[0].strIngredient14)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure15+filtterdet.meals[0].strIngredient15)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure16+filtterdet.meals[0].strIngredient16)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure17+filtterdet.meals[0].strIngredient17)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure18+filtterdet.meals[0].strIngredient18)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure19+filtterdet.meals[0].strIngredient19)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdet.meals[0].strMeasure20+filtterdet.meals[0].strIngredient20)}</li>
            </ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-danger m-2 p-1 valid">${valid(filtterdet.meals[0].strTags)}</li>
            </ul>
            <a target="_blank" href="${filtterdet.meals[0].strSource}" class="btn btn-success my-2">Source</a>
            <a target="_blank" href="${filtterdet.meals[0].strYoutube}" class="btn btn-danger my-2">Youtube</a>
        </div>
    </div>

    `
    document.querySelector('.filtter').innerHTML=cartona;
    check()
        }
    })
}
function ingredients(){
    document.querySelector('.main').classList.add('d-none');
    document.querySelector('.areaPage').classList.add('d-none');
    document.querySelector('.categoryPage').classList.add('d-none');
    document.querySelector('.conactPage').classList.add('d-none');
    document.querySelector('.searchPage').classList.add('d-none');
    none();
    document.querySelector('.ingradientsPage').classList.remove('d-none');
    let req=new XMLHttpRequest();
    req.open('get','https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    req.send();
    req.addEventListener('loadend',function(){
    if(req.status==200){
        ing=JSON.parse(req.response);
        let cartona="";
        for(let i=0;i<20;i++){
        cartona+=`
        <div class="col-lg-3">
        <div class="area p-4 text-center" onclick="displayIng('${ing.meals[i].strIngredient}');">
            <div class="top">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            </div>
            <div class="content overflow-hidden">
                <h3>${ing.meals[i].strIngredient}</h3>
                <p>${ing.meals[i].strDescription}</p>
            </div>
        </div>
    </div>
        `
    }
    loading();
    document.querySelector('.ing').innerHTML=cartona;
    }
})
    
}
function displayIng(name){
    let reqq=new XMLHttpRequest();
    reqq.open('get',`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);
    reqq.send();
    reqq.addEventListener('loadend',function(){
        if(reqq.status==200){
            filtterIng=JSON.parse(reqq.response);
            document.querySelector('.ing').classList.add('d-none');
            document.querySelector('.filtterIng').classList.remove('d-none');
            let cartona="";
            for(let i=0;i<filtterIng.meals.length;i++){
                cartona+=`
                <div class="col-lg-3 py-3 test1 ">
                <div class="card position-relative" onclick="detailsFiltterIng('${filtterIng.meals[i].idMeal}');">
                <img src=${filtterIng.meals[i].strMealThumb} alt="not found">
                <div class="position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-start align-items-center p-3 con"><h3>${filtterIng.meals[i].strMeal}</div>
                </div>
            </div>
                `
            }
            loading();
            document.querySelector('.filtterIng').innerHTML=cartona;
        }
    })
}
function detailsFiltterIng(id){
    let req=new XMLHttpRequest();
    req.open('get',`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    req.send();
    req.addEventListener('loadend',function(){
        if(req.status==200){
            filtterdetIng=JSON.parse(req.response);
            loading();
            cartona=`
    <div class="col-lg-4 test2">
        <div class="imgeSide">
            <img src=${filtterdetIng.meals[0].strMealThumb} alt="not found">
            <h3 class="p-1">${filtterdetIng.meals[0].strMeal}</h3>
        </div>
    </div>
    <div class="col-lg-8 test3">
        <div class="content">
            <h3>Instructions</h3>
            <p>${filtterdetIng.meals[0].strInstructions}</p>
            <h3>Area : ${filtterdetIng.meals[0].strArea}</h3>
            <h3>Category : ${filtterdetIng.meals[0].strCategory}</h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure1+filtterdetIng.meals[0].strIngredient1)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure2+filtterdetIng.meals[0].strIngredient2)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure3+filtterdetIng.meals[0].strIngredient3)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure4+filtterdetIng.meals[0].strIngredient4)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure5+filtterdetIng.meals[0].strIngredient5)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure6+filtterdetIng.meals[0].strIngredient6)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure7+filtterdetIng.meals[0].strIngredient7)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure8+filtterdetIng.meals[0].strIngredient8)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure9+filtterdetIng.meals[0].strIngredient9)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure10+filtterdetIng.meals[0].strIngredient10)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure11+filtterdetIng.meals[0].strIngredient11)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure12+filtterdetIng.meals[0].strIngredient12)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure13+filtterdetIng.meals[0].strIngredient13)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure14+filtterdetIng.meals[0].strIngredient14)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure15+filtterdetIng.meals[0].strIngredient15)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure16+filtterdetIng.meals[0].strIngredient16)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure17+filtterdetIng.meals[0].strIngredient17)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure18+filtterdetIng.meals[0].strIngredient18)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure19+filtterdetIng.meals[0].strIngredient19)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetIng.meals[0].strMeasure20+filtterdetIng.meals[0].strIngredient20)}</li>
            </ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-danger m-2 p-1 valid">${valid(filtterdetIng.meals[0].strTags)}</li>
            </ul>
            <a target="_blank" href="${filtterdetIng.meals[0].strSource}" class="btn btn-success my-2">Source</a>
            <a target="_blank" href="${filtterdetIng.meals[0].strYoutube}" class="btn btn-danger my-2">Youtube</a>
        </div>
    </div>

    `
    document.querySelector('.filtterIng').innerHTML=cartona;
    check();
        }
    })
}
function categories(){
    document.querySelector('.main').classList.add('d-none');
    document.querySelector('.areaPage').classList.add('d-none');
    document.querySelector('.ingradientsPage').classList.add('d-none');
    document.querySelector('.conactPage').classList.add('d-none');
    document.querySelector('.searchPage').classList.add('d-none');
    none();
    document.querySelector('.categoryPage').classList.remove('d-none');
    let req =new XMLHttpRequest();
    req.open('get','https://www.themealdb.com/api/json/v1/1/categories.php');
    req.send();
    req.addEventListener('loadend',function(){
    if(req.status==200){
        foodCategories=JSON.parse(req.response);
        loading();
        let cartona="";
        for(let i=0;i<foodCategories.categories.length;i++){
        cartona+=`
        <div class="col-lg-3 py-3 test1 ">
        <div class="card position-relative" onclick="detailsCategory('${foodCategories.categories[i].strCategory}');">
        <img src=${foodCategories.categories[i].strCategoryThumb} class="b_g" alt="not found">
        <div class="position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-start align-items-center p-3 con"><h3>${foodCategories.categories[i].strCategory}</div>
        </div>
    </div>
        `
    }
    document.querySelector('.cate').innerHTML=cartona;
    }
})
}
function detailsCategory(name){
    let reqq=new XMLHttpRequest();
    reqq.open('get',`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
    reqq.send();
    reqq.addEventListener('loadend',function(){
        if(reqq.status==200){
            filtterCate=JSON.parse(reqq.response);
            document.querySelector('.cate').classList.add('d-none');
            document.querySelector('.filtterCate').classList.remove('d-none');
            let cartona="";
            for(let i=0;i<filtterCate.meals.length;i++){
                cartona+=`
                <div class="col-lg-3 py-3 test1 ">
                <div class="card position-relative" onclick="detailsFiltterCate('${filtterCate.meals[i].idMeal}');">
                <img src=${filtterCate.meals[i].strMealThumb} alt="not found">
                <div class="position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-start align-items-center p-3 con"><h3>${filtterCate.meals[i].strMeal}</div>
                </div>
            </div>
                `
            }
            loading();
            document.querySelector('.filtterCate').innerHTML=cartona;
        }
    })

}
function detailsFiltterCate(id){
    let req=new XMLHttpRequest();
    req.open('get',`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    req.send();
    req.addEventListener('loadend',function(){
        if(req.status==200){
            filtterdetCate=JSON.parse(req.response);
            loading();
            cartona=`
    <div class="col-lg-4 test2">
        <div class="imgeSide">
            <img src=${filtterdetCate.meals[0].strMealThumb} alt="not found">
            <h3 class="p-1">${filtterdetCate.meals[0].strMeal}</h3>
        </div>
    </div>
    <div class="col-lg-8 test3">
        <div class="content">
            <h3>Instructions</h3>
            <p>${filtterdetCate.meals[0].strInstructions}</p>
            <h3>Area : ${filtterdetCate.meals[0].strArea}</h3>
            <h3>Category : ${filtterdetCate.meals[0].strCategory}</h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure1+filtterdetCate.meals[0].strIngredient1)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure2+filtterdetCate.meals[0].strIngredient2)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure3+filtterdetCate.meals[0].strIngredient3)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure4+filtterdetCate.meals[0].strIngredient4)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure5+filtterdetCate.meals[0].strIngredient5)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure6+filtterdetCate.meals[0].strIngredient6)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure7+filtterdetCate.meals[0].strIngredient7)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure8+filtterdetCate.meals[0].strIngredient8)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure9+filtterdetCate.meals[0].strIngredient9)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure10+filtterdetCate.meals[0].strIngredient10)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure11+filtterdetCate.meals[0].strIngredient11)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure12+filtterdetCate.meals[0].strIngredient12)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure13+filtterdetCate.meals[0].strIngredient13)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure14+filtterdetCate.meals[0].strIngredient14)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure15+filtterdetCate.meals[0].strIngredient15)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure16+filtterdetCate.meals[0].strIngredient16)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure17+filtterdetCate.meals[0].strIngredient17)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure18+filtterdetCate.meals[0].strIngredient18)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure19+filtterdetCate.meals[0].strIngredient19)}</li>
            <li class="alert alert-info m-2 p-1">${valid(filtterdetCate.meals[0].strMeasure20+filtterdetCate.meals[0].strIngredient20)}</li>
            </ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                <li class="alert alert-danger m-2 p-1 valid">${valid(filtterdetCate.meals[0].strTags)}</li>
            </ul>
            <a target="_blank" href="${filtterdetCate.meals[0].strSource}" class="btn btn-success my-2">Source</a>
            <a target="_blank" href="${filtterdetCate.meals[0].strYoutube}" class="btn btn-danger my-2">Youtube</a>
        </div>
    </div>

    `
    document.querySelector('.filtterCate').innerHTML=cartona;
    check();
        }
    })
}
function contact(){
    document.querySelector('.main').classList.add('d-none');
    document.querySelector('.areaPage').classList.add('d-none');
    document.querySelector('.categoryPage').classList.add('d-none');
    document.querySelector('.searchPage').classList.add('d-none');
    document.querySelector('.ingradientsPage').classList.add('d-none');
    none();
    document.querySelector('.conactPage').classList.remove('d-none');

}
function check(){
    let r=document.querySelectorAll('li');
for(var i=0;i<r.length;i++){
    if(r[i].innerHTML=='-'||r[i].innerHTML==""||r[i].innerHTML==" "||r[i].innerHTML==null){
        r[i].classList.add('d-none');
    }
}
}
let submitBtn = document.getElementById("submitBtn")
let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;

    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })

function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}
function home(){
location.reload();
}