var resturants = [
    {"id": 0,"enname": " Al Abraj Resturant ","arname": " مطعم الأبراج ","location": " Al Hidd الحد ","mobile": "+973 36 66 66 66","phone": "+973 17 43 43 43","deliveryhours": "+60 minutes to delivery","pic": "1.jpg"},
    {"id": 1,"enname": " Bab Al Hara ","arname": " باب الحارة ","location": " Buri بوري ","mobile": "+973 36 66 66 66","phone": "+973 17 43 43 43","deliveryhours": "+70 minutes to delivery","pic": "2.jpg"},
    {"id": 2,"enname": " Choclave Cafe ","arname": "جوكولوف كافي ","location": " Sar سار ","mobile": "+973 36 66 66 66","phone": "+973 17 43 43 43","deliveryhours": "+120 minutes to delivery","pic": "3.jpg"},
    {"id": 3,"enname": " Wholesale Resturant ","arname": " مطعم الجملة ","location": " Jidali جدعلي ","mobile": "+973 36 66 66 66","phone": "+973 17 43 43 43","deliveryhours": "+45 minutes to delivery","pic": "4.jpg"},
    {"id": 4,"enname": " Seasons Resturant ","arname": " مطعم سيزونز ","location": " Budiya البديع ","mobile": "+973 36 66 66 66","phone": "+973 17 43 43 43","deliveryhours": "+45 minutes to delivery","pic": "5.jpg"}
    ];
exports.findAll=function(req,res,next){
    var name=req.query.name;
    if(name){
    res.send(resturants.filter(function(resturant){
    return(resturant.enname + ''+resturant.arname).toLowerCase().indexOf(name.toLowerCase()) > -1;}));
    }else{
    res.send(resturants);
    }
    };
    exports.findById=function(req,res,next){
        var id = req.params.id;
        res.send(resturants[id]);
        };
        exports.findresturantsbhs=function(req,res,next){var id = parseInt(req.params.id),response,resturantsbhs=[],resturant;
        response={id:id,enname:resturants[id].enname,arname:resturants[id].arname,location:resturants[id].location,pic:resturants[id].pic}
        response.resturantsbhs=resturantsbhs;
        res.send(response);
        };