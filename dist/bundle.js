$(function(){
    var $width=$('#width'),
      $height=$('#length'),
      $btn=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
$btn.click(function(){
      var w=Number($width.val()),
          h=Number($height.val());
    /*var p=2*(w+h),
     *         a=w*h;*/
    var rect=rectangle();
        $perimeter.val(rect.perimeter(w,h));
            $area.val(rect.area(w,h));
              
})

});
;function rectangle() {
  return {
    'perimeter' : function(w, h) {
      return 2 * (Number(w) + Number(h));
    },
    'area': function(w, h) {
      return Number(w) * Number(h);
    }
  };
}

