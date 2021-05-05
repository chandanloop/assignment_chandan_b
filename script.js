fetch("https://reqres.in/api/users").then(
      res => {
          res.json().then(
              data => {
                  console.log(data.data);
                  if(data.data.length > 0){
                      var temp = "";
                      var i=0;
                      data.data.forEach((itemData)=>{
                          i=i+1;
                       /*   temp = temp + "<tr"+" id=\""+i +"\" onClick=\"fillUp()\">";  */
                        /* temp = temp + "<tr onClick=\"fillUp()\">";  */
                          temp = temp + "<tr id=\"dtl" +i +"\" onClick=\"fillUp(\'dtl" +i +"\')\">";                         
                          temp = temp + "<td>" + itemData.id +"</td>";
                          temp = temp + "<td>" + itemData.email + "</td><td></td><td></td>";
                          temp = temp + "<td>" + itemData.first_name + "</td><td></td>";
                          temp = temp + "<td>" + itemData.last_name + "</td><td></td>";
                          temp = temp + "<td>" + "<img src=" +itemData.avatar +">" + "</td>";
                          temp = temp + "</tr>";
                      });
                      document.getElementById('data').innerHTML = temp;
                  }
              }
          )
      }
  )

var ffname,llname,eemail,iimage;

function show(evt, tabname) {
    var i, tabcontent, tablinks;
    console.log("show");
    console.log(ffname);

    tabcontent = document.getElementsByClassName("tab_content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += "active";
  }

function success(){
    event.preventDefault();
    var fname,lname,email,image,status;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    image = document.getElementById("img").value;
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(fname!="" && lname!="" && email!="" && image!="" ){
        /*if(email.value.match(mailformat))*/
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        {
            console.log("name: ",fname,lname,"email: ",email,"successfull.");
            status = "<h3>Name: " +fname+" "+lname +"<br>Email: "+email +"<br>SUCCESSFULL..."+"</h3>";
            document.getElementById("status").innerHTML=status;  
            document.getElementById("fname").value="";
            document.getElementById("lname").value="";
            document.getElementById("email").value="";
            document.getElementById("img").value="";
            for (var i = 0; i < 10; i++) {
                setTimeout(function () {
                    document.getElementById("status").innerHTML="";
                }, 2000)
        }  
    }
}}

function fillUp(dtln){
    row = document.getElementById(dtln);
    ffname = row.cells[4].innerHTML;
    llname = row.cells[6].innerHTML;
    eemail = row.cells[1].innerHTML;
    iimage = row.cells[1].getAttribute("src");

    document.getElementById("create_btn").click();

    document.getElementById("fname").value=ffname;
    document.getElementById("lname").value=llname;
    document.getElementById("email").value=eemail;
    
    document.getElementById("fname").disabled=true;
    document.getElementById("lname").disabled=true;
    document.getElementById("email").disabled=true;
    document.getElementById("img").disabled=true;
    document.getElementById("submit").disabled=true;
}