function tail(o){
    for(; o.next; o = o.next); return o;
}

var car = [1, 2, 3];
tail(car);