const expect=require('chai').expect;

describe('天气预报接口测试套件',function(){
  it('石家庄天气',function(){
    const http=require('http');
    var addr='http://v.juhe.cn/weather/index?format=2&key=0ce19c3ab9df52044782ce8959500372&cityname=石家庄';
    addr=global.encodeURI(addr);
   
    http.get(addr,res=>{
        var result='';
        res.on('data',data=>{
            result+=data.toString('utf8');
                
        });

        res.on('end',()=>{
            var weather=JSON.parse(result);
            //console.log(weather);   
            expect(weather.resultcode).to.be.equal(200);
        });

    });
  });
});
