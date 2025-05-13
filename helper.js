function get(id){
  return document.getElementById(id);
};

function fillDropDown(key){
  let list = [];
  let build = ""
  for(let i = 0; i < data.length; i++){
    let data_field = data[i];
    if(!list.includes(data_field[key])){
      list.push(data_field[key]);
    }
  }
  list.sort();
  for(let field of list){
      build += `<option>${field}</option>`;
  }
  return build;
}

class FlipCard{
  constructor(front,back){
    this.front = front;
    this.back = back;
  }
  render(container){
    this.obj = document.createElement("div");
    this.obj.setAttribute("class","flip-card");
    this.obj.addEventListener("click",()=>{
      console.log(this.obj);
      this.obj.classList.toggle("flip");
    })
    let build = "";
    build += `<div class="flip-front">${this.front}</div>`
    build += `<div class="flip-back">${this.back}</div>`

    this.obj.innerHTML = build
    document.getElementById(container).append(this.obj)
  }
}

function card( crime ){
  let build = "";
  build += `<div class="fitted card">`;
  build += `     <h3>${crime.county}</h3>`;
  build += `     <p>${crime.arrest_id}</p>`;
  build += `     <p>${crime.offense_description}</p>`;
  build += `     <p>${crime.complaint_year_number}</p><hr>`;
  build += `     <p>${crime.bias_motive_description}<br>`;
  build += `     <p>${crime.offense_category}<br>`;
  build += `</div>`;
  return build;
}

function showLocation(lat, lon){
  //mapKey = "gone";
  
  //let map = `https://www.mapquestapi.com/staticmap/v5/map?center=${lat},${lon}&zoom=14&size=@2x&key=${mapKey}`;
  //return`<img class="map" src="${map}">`;
  return ;
}

function cards(crimes){
  for(let i = 0; i < data.length; i++){
    let crime = crimes[i];
    let front = card(crime);
    let back = showLocation(crime.latitude,crime.longitude);
    let flipcard = new FlipCard(front,back);
    flipcard.render("output");
  }
}

function filter( crimes, key , value ){
  let list = [];
  for(let i = 0; i < crimes.length; i++){
    let crime = crimes[i];
    if(crime[key] == value){
      list.push(crimes[i]);
    }
  }
  return list;
}

function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type: type
    }
  });
}
