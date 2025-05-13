let data, output, result, complant;

function init_info(){
  $.ajaxSetup({async: false});
  let link = "https://data.cityofnewyork.us/resource/bqiq-cu78.json";
  data = $.getJSON(link).responseJSON;
  output = document.getElementById("output");
  console.log(data);

  let counties = fillDropDown("county");
  document.getElementById("county").innerHTML = counties;
  
  let motive = fillDropDown("bias_motive_description");
  document.getElementById("motive").innerHTML = motive;
  
  let category = fillDropDown("offense_category");
  document.getElementById("category").innerHTML = category;
  
  cards(data);
};

function init_anal(){
  $.ajaxSetup({async: false});
  let link = "https://data.cityofnewyork.us/resource/bqiq-cu78.json";
  data = $.getJSON(link).responseJSON;
  console.log(data);
};

//Info page
function filterByCounty(){
  get("output").innerHTML = "";
  let borough = get("county").value;
  for(let i = 0; i < data.length; i++){
    let subdatas = filter(data, "county", borough );
    cards( subdatas );
  };
};

function filterByMotiveANDArrestID(){
  get("output").innerHTML = "";
  let arrest = get("arrest").value;
  let motive = get("motive").value;
  for(let i = 0; i < data.length; i++){
    let subdata = filter(data, "arrest_id", arrest );
    let subdata1 = filter(data, "bias_motive_description", motive );
    cards( subdata);
    cards( subdata1);
  };
};

function filterByCategory(){
  get("output").innerHTML = "";
  let category = get("category").value;
  let motive = get("motive").value;
  for(let i = 0; i < data.length; i++){
    let subdata2 = filter(data, "offense_category", category );
    cards( subdata2);
  };
};

//Anal page
function crimesByCounty(){
  let b = 0, k = 0, ny = 0, q = 0, r = 0;
  
  for(let i = 0; i < data.length; i++){
    let crime = data[i];
    if(crime.county == "BRONX"){
      b++;
    }else if(crime.county == "KINGS"){
      k++;
    }else if(crime.county == "NEW YORK"){
      ny++;
    }else if(crime.county == "QUEENS"){
      q++;
    }else if(crime.county == "RICHMOND"){
      r++;
    };
  };

  let chartData = [
    ["KINGS",k],
    ["BRONX",b],
    ["QUEENS",q],
    ["NEW YORK",ny],
    ["RICHMOND",r],
  ];

  let chartType = get("chartType").value;
  displayChart(chartData, "chart", chartType);
};

function crimesByMotive(){
  let a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0, a7 = 0, a8 = 0, a9 = 0, a10 = 0, a11 = 0, a12 = 0, a13 = 0, a14 = 0, a15 = 0, a16 = 0, a17 = 0, a18 = 0, a19 = 0, a20 = 0, a21 = 0, a22 = 0, a23 = 0, a24 = 0, a25 = 0;
  for(let i = 0; i < data.length; i++){
    let crime = data[i];
    if(crime.bias_motive_description == "60 YRS AND OLDER"){
      a1++;
    }else if(crime.bias_motive_description == "ANTI-ARAB"){
      a2++;
    }else if(crime.bias_motive_description == "ANTI-ASIAN"){
      a3++;
    }else if(crime.bias_motive_description == "ANTI-BLACK"){
      a4++;
    }else if(crime.bias_motive_description == "ANTI-BUDDHIST"){
      a5++;
    }else if(crime.bias_motive_description == "ANTI-CATHOLIC"){
      a6++;
    }else if(crime.bias_motive_description == "ANTI-EASTERN ORTHODOX"){
      a7++;
    }else if(crime.bias_motive_description == "ANTI-FEMALE"){
      a8++;
    }else if(crime.bias_motive_description == "ANTI-FEMALE HOMOSEXUAL (LESBIAN)"){
      a9++;
    }else if(crime.bias_motive_description == "ANTI-GENDER NON-CONFORMING"){
      a10++;
    }else if(crime.bias_motive_description == "ANTI-HINDU"){
      a11++;
    }else if(crime.bias_motive_description == "ANTI-HISPANIC"){
      a12++;
    }else if(crime.bias_motive_description == "ANTI-JEHOVAHS WITNESS"){
      a13++;
    }else if(crime.bias_motive_description == "ANTI-JEWISH"){
      a14++;
    }else if(crime.bias_motive_description == "ANTI-LGBT (MIXED GROUP)"){
      a15++;
    }else if(crime.bias_motive_description == "ANTI-MALE HOMOSEXUAL (GAY)"){
      a16++;
    }else if(crime.bias_motive_description == "ANTI-MULTI-RACIAL GROUPS"){
      a17++;
    }else if(crime.bias_motive_description == "ANTI-MUSLIM"){
      a18++;
    }else if(crime.bias_motive_description == "ANTI-OTHER ETHNICITY"){
      a19++;
    }else if(crime.bias_motive_description == "ANTI-OTHER RELIGION"){
      a20++;
    }else if(crime.bias_motive_description == "ANTI-PHYSICAL DISABILITY"){
      a21++;
    }else if(crime.bias_motive_description == "ANTI-SIKH"){
      a22++;
    }else if(crime.bias_motive_description == "ANTI-TRANSGENDER"){
      a23++;
    }else if(crime.bias_motive_description == "ANTI-WHITE"){
      a24++;
    }else if(crime.bias_motive_description == "ANTI_BLACK"){
      a25++;
    };
  };

  let chartData = [
    ["60 YRS AND OLDER",a1],
    ["ANTI-ARAB",a2],
    ["ANTI-ASIAN",a3],
    ["ANTI-BLACK",a4],
    ["ANTI-BUDDHIST",a5],
    ["ANTI-CATHOLIC",a6],
    ["ANTI-EASTERN ORTHODOX",a7],
    ["ANTI-FEMALE",a8],
    ["ANTI-FEMALE HOMOSEXUAL (LESBIAN)",a9],
    ["ANTI-GENDER NON-CONFORMING",a10],
    ["ANTI-HINDU",a11],
    ["ANTI-HISPANIC",a12],
    ["ANTI-JEHOVAHS WITNESS",a13],
    ["ANTI-JEWISH",a14],
    ["ANTI-LGBT (MIXED GROUP)",a15],
    ["ANTI-MALE HOMOSEXUAL (GAY)",a16],
    ["ANTI-MULTI-RACIAL GROUPS",a17],
    ["ANTI-MUSLIM",a18],
    ["ANTI-OTHER ETHNICITY",a19],
    ["ANTI-OTHER RELIGION",a20],
    ["ANTI-PHYSICAL DISABILITY",a21],
    ["ANTI-SIKH",a22],
    ["ANTI-TRANSGENDER",a23],
    ["ANTI-WHITE",a24],
    ["ANTI_BLACK",a25],
  ];

  let chartType = get("chartType").value;
  displayChart(chartData, "chart", chartType); 
};

function crimesByYear(){
  let n = 0, t = 0, t1 = 0, t2 = 0, t3 = 0;
  
  for(let i = 0; i < data.length; i++){
    let crime = data[i];
    if(crime.complaint_year_number == "2019"){
      n++;
    }else if(crime.complaint_year_number == "2020"){
      t++;
    }else if(crime.complaint_year_number == "2021"){
      t1++;
    }else if(crime.complaint_year_number == "2022"){
      t2++;
    }else if(crime.complaint_year_number == "2023"){
      t3++;
    };
  };

  let chartData = [
    ["2019",n],
    ["2020",t],
    ["2021",t1],
    ["2022",t2],
    ["2023",t3],
  ];

  let chartType = get("chartType").value;
  displayChart(chartData, "chart", chartType);
};