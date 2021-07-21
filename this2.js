function vivek() {
    var temp2 = "temp2"
    console.log(this.temp2);
    function vivek2(){
        
        console.log(this.temp2);
    }
    vivek2()
}

vivek()