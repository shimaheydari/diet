function result() {
    var weight = document.getElementById("weight").value;

    var talk = document.getElementById("talk").value;
    var name = document.getElementById("name").value;
    var lbl = document.getElementById("demo");
    weight = parseInt(weight);
    talk = parseInt(talk);
    var result = talk - 110;
    var add = weight - result;

    lbl.innerHTML = name + "  عزیز" + "</br>" + " وزن ایده آل شما " + result + " کیلوگرم میباشد" + "</br>" + "  شما" + add + " کیلوگرم اضافه وزن دارید ";

}