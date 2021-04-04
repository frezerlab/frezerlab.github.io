let exist_img, size_image, scale;
let input_size_img = $('.size-img');
let create_btn = $('.create-btn');
let delete_btn = $('.delete-btn');
let svg_canvas = $('svg.canvas');
let size_minus_btn = $('.size-minus');
let size_plus_btn = $('.size-plus');
let size_pixel_label = $('label.size-pixel');
let save_sci_btn = $('.save-sci');
let save_png_btn = $('.save-png');
let save_jpeg_btn = $('.save-jpeg');
let save_webp_btn = $('.save-webp');
let file_load_input = $('#file');
let file_path_input = $('.file-path.validate');
let canvas = $('#canvas')[0];
let img = new Image();

$(function() {
  delete_btn.addClass('disabled');
  size_plus_btn.addClass('disabled');
  size_minus_btn.addClass('disabled');
  save_sci_btn.addClass('disabled');
  save_png_btn.addClass('disabled');
  save_jpeg_btn.addClass('disabled');
  save_webp_btn.addClass('disabled');
});

create_btn.click(function () {
  OnCreateImg(input_size_img.val());

});

delete_btn.click(function () {
  create_btn.removeClass('disabled');
  delete_btn.addClass('disabled');
  size_plus_btn.addClass('disabled');
  size_minus_btn.addClass('disabled');
  save_sci_btn.addClass('disabled');
  save_png_btn.addClass('disabled');
  save_jpeg_btn.addClass('disabled');
  save_webp_btn.addClass('disabled');
  input_size_img.prop('disabled', false);
  svg_canvas.html('');
  size_pixel_label.html('');
  exist_img = false;
  file_path_input.removeClass('valid');
  file_path_input[0].value = '';
  file_load_input[0].value = '';
});

size_minus_btn.click(function (){
  OnChangeScale(-size_image*3);
});
size_plus_btn.click(function (){
  OnChangeScale(size_image*3);
});

function OnCreateImg(size){
  create_btn.addClass('disabled');
  delete_btn.removeClass('disabled');
  size_plus_btn.removeClass('disabled');
  size_minus_btn.removeClass('disabled');
  save_sci_btn.removeClass('disabled');
  save_png_btn.removeClass('disabled');
  save_jpeg_btn.removeClass('disabled');
  save_webp_btn.removeClass('disabled');
  input_size_img.prop('disabled', true);
  size_image = size == 0? 10 : size;
  svg_canvas.html(`<rect height=\"${size_image*140}\" width=\"${size_image*140}\" x=\"50%\" y=\"50%\" transform=\"translate(${-size_image*140/2},${-size_image*140/2}\)" fill=\"hsl(0, 0%, ${size_image*10}%)\"/>`);
  exist_img = true;

  _scale = 28*size_image;
  svg_canvas.attr('viewBox', `0 0 ${_scale*5} ${_scale*5}`);
  size_pixel_label.html(`size: ${size_image}×${size_image} • ${((140/(_scale*5))*100).toFixed(2)}%`);
  set_canvas(size, size);
}

let _scale = 28;
function OnChangeScale(scale){
  _scale -= scale;
  if(_scale < 1) _scale = 1;
  svg_canvas.attr('viewBox', `0 0 ${_scale*5} ${_scale*5}`);
  size_pixel_label.html(`size: ${size_image}×${size_image} • ${((140/(_scale*5))*100).toFixed(2)}%`);
}


file_load_input.change(function (){
  if(!window.FileReader){
    return alert( 'FileReader API is not supported by your browser.' );
  }
  let file_name = file_load_input.val().split('\\').pop();
  let $i = file_load_input;
  let input = $i[0];

  if (input.files && input.files[0]){
    let  file = input.files[0];
      switch (file_name.split('.').pop()) {
        case 'sci':
          let fr_sci = new FileReader();
          fr_sci.onload = function (e){
            svg_canvas.html('');
            size_pixel_label.html('');
            exist_img = false;
            OnCreateImg(e.target.result);
          }
          fr_sci.readAsText(this.files[0]);
          break;
        case 'png':
          let fr_png = new FileReader();
          fr_png.onload = function (e){
            img_obj(e.target.result);
          }
          fr_png.readAsDataURL(this.files[0]);
          break;
        case 'jpg':
          let fr_jpg = new FileReader();
          fr_jpg.onload = function (e){
            img_obj(e.target.result);
          }
          fr_jpg.readAsDataURL(this.files[0]);
          break;
        case 'jpeg':
          let fr_jpeg = new FileReader();
          fr_jpeg.onload = function (e){
            img_obj(e.target.result);
          }
          fr_jpeg.readAsDataURL(this.files[0]);
          break;
        case 'webp':
          let fr_webp = new FileReader();
          fr_webp.onload = function (e){
            img_obj(e.target.result);
          }
          fr_webp.readAsDataURL(this.files[0]);
          break;
        default:
            setTimeout(function (){
              file_path_input.addClass('invalid');
              file_path_input.removeClass('valid');
              // Something you want delayed.
            }, 100); // How long do you want the delay to be (in milliseconds)?
          break;
      }
  }
});


function img_obj(fr_result){
  img.src = fr_result;
  img.onload = function (){
    if(img.width <= img.height){
      let _width = img.width > 11? 10 : img.width;
      set_canvas(_width, _width);
      OnCreateImg(_width);
    } else {
      let _height = img.height > 11? 10 : img.height;
      set_canvas(_height, _height);
      OnCreateImg(_height
      );
    }
  }
}

function SCISave() {
  return input_size_img.val() >= 10? 0 : input_size_img.val();
}

let ctx = canvas.getContext('2d');
function set_canvas(color, size){
  canvas.width = size;
  canvas.height = size;
  ctx.fillStyle = `hsl(0,0%, ${color*10}%)`;
  ctx.fillRect(0, 0, size, size);
}



function DownloadCanvasAsImage(file){
  let downloadLink = document.createElement('a');
  downloadLink.setAttribute('download', `image.${file}`);
  let dataURL = canvas.toDataURL(`image/${file}`);
  let url = dataURL.replace(file === 'png'? /^data:image\/png/ : file === 'jpeg'? /^data:image\/jpeg/ : /^data:image\/webp/,'data:application/octet-stream');
  downloadLink.setAttribute('href',url);
  downloadLink.click();
}

save_sci_btn.click(function (){
  let workElement = document.createElement("a");
  if ('download' in workElement) {
    workElement.href = "data:" + 'text/plain' + "charset=utf-8," + escape(SCISave());
    workElement.setAttribute("download", 'Image.sci');
    document.body.appendChild(workElement);
    let eventMouse = document.createEvent("MouseEvents");
    eventMouse.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    workElement.dispatchEvent(eventMouse);
    document.body.removeChild(workElement);
  } else throw alert('File saving not supported for this browser');
});
save_png_btn.click(function (){
  DownloadCanvasAsImage('png');
});
save_jpeg_btn.click(function (){
  DownloadCanvasAsImage('jpeg');
});
save_webp_btn.click(function (){
  DownloadCanvasAsImage('webp');
});
