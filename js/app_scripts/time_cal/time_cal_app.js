
let carou = $('.carousel.carousel-slider.select-action-menu-mobile').carousel({
    fullWidth: true,
    indicators: true,
});
let title = $('title');
let page_index;
let name_app = 'Time Calculator';
let calc_names = ['Сумма времени', 'test2', 'test3', 'test4']
let time_table_arr = [
    [
        'Время'
    ],
    [
        '0:00:30'
    ],
    [
        '0:01:00'
    ],
    [
        '1:00:00'
    ]
]
let table = new TableCore(time_table_arr,'#time_table', true, true);
let body = $('body');
let content_modal;

table.create();

body.on('click', '#add_row', function(){
    $('#modal_edit').modal('open').attr('data-index', '').attr('data-type', 'add');
});
body.on('click', '#delete_row', function(){
    table.delete_row();
})
body.on('click', '#edit_row', function () {
    $('#modal_edit').modal('open').attr('data-index', $(this).data('index')).attr('data-type', 'edit');
});
body.on('click', '#hide_row', function () {
    table.hide_row($(this).data('index'), $(this).children('i'));
});


setInterval(function () {
    page_index = $('.carousel.carousel-slider.select-action-menu-mobile > .indicators > .indicator-item.active').index();
    if(title.text() !== `${name_app} — ${calc_names[page_index]}`) title.text(`${name_app} — ${calc_names[page_index]}`);
}, 10);

function sel_page() {
    setInterval(function () {
        switch (page_index) {
            case 0:

                break;
            default:

                break;

        }

        }, 10);
}

$('#side-back').click(function () {
    sel_page();
    carou.carousel('prev');
});
$('#side-forward').click(function () {
    sel_page();
    carou.carousel('next');
});

$('#modal_save').click(function () {
    let i = ($('form[name="times"] #hours').val() * 3600) + ($('form[name="times"] #minutes').val() * 60) + $('form[name="times"] #seconds').val() * 1;
    let modal = $('#modal_edit');
    switch (modal.attr('data-type')) {
        case 'add':
            table.add_row([`${time(i).h}:${time(i).m}:${time(i).s}`]);
            break;
        case 'edit':
            table.edit_row(parseInt(modal.attr('data-index')), [`${time(i).h}:${time(i).m}:${time(i).s}`]);
            break;
    }
});

$('#calc_btn').click(function () {
    let sum = 0;
    let min = 0;
    let max = 0;
    let arr = [];

    for(let i = 0; i < table.val.length; i++){
        arr.push(time_sec(table.val[i][0]));
        sum += time_sec(table.val[i][0]);
    }

    min = Math.min(...arr);
    max = Math.max(...arr);
    $('#sum_time').text(`${time(sum).h}:${time(sum).m}:${time(sum).s}`);
    $('#min_time').text(`${time(min).h}:${time(min).m}:${time(min).s}`);
    $('#max_time').text(`${time(max).h}:${time(max).m}:${time(max).s}`);
});

function time(totalSeconds) {
    let _totalSeconds = totalSeconds;
    let hours = Math.floor(_totalSeconds / 3600);
    _totalSeconds %= 3600;
    let minutes = Math.floor(_totalSeconds / 60);
    let seconds = _totalSeconds % 60;

    if(isNaN(minutes)) minutes = 0
    if(isNaN(seconds)) seconds = 0;

    //hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    if(Math.abs(hours) === Infinity) hours = 0;

    return {'h': hours, 'm': minutes, 's': seconds};
}

function time_sec(str) {
    let p = [];
    let s = 0;
    let m = 1;
    if(str !== undefined){
        p = str.split(':');
    }
    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }
    if(!isNaN(s)){
        return s;
    }
}