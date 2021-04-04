/*
* Table Core — designed for easy work with data tables.
* Allows: add, delete, edit and select multiple columns.
*                             by Frezer lab. 26.03.2021
*/

class TableCore {
    constructor(content, table, checkboxes, editing) {
        this.content = content
        this.table = table;
        this.checkboxes = checkboxes;
        this.editing = editing;
    }
    add_row(content) {
        this.content.push(content);
        this.create();
        ReplaceColor(color = curColor);
    }
    delete_row() {
        for(let i = this.content.length - 1; i >= 0; i--) {
            if($(`${this.table} > tbody > tr > td > #checkbox > label > input:checkbox:eq(${i-1})`).is(':checked')){
                let j = $(`${this.table} > tbody > tr > td > #checkbox:eq(${i-1})`).attr('data-index') - "";
                this.content.splice(j+1, 1);
            }
        }
        this.create();
        ReplaceColor(color = curColor);

    }
    edit_row(row_index, content) {
        this.content[row_index + 1] = content;
        this.create();
        ReplaceColor(color = curColor);
    }
    hide_row(row_index, btn_icon) {
        let tr_row = $(`${this.table} > tbody > tr`);

        if(tr_row.eq(row_index).attr('disabled') === 'disabled'){
            tr_row.eq(row_index).removeAttr("disabled");
            btn_icon.text('visibility')
        } else {
            tr_row.eq(row_index).attr('disabled', '');
            btn_icon.text('visibility_off')
        }

    }
    checkboxes_upd() {
        let TT = this.table;
        upd_check_count();

        $(`${TT} #checkbox_all :checkbox`).click(function () {
            $(`${TT} td :checkbox`).prop('checked', $(`${TT} #checkbox_all :checkbox`).is(':checked'));
            upd_check_count();
        });

        $(`${TT} :checkbox`).click(function(){
            upd_check_count();
        });

        function upd_check_count() {
            let chkbox_chek = $(`${TT} td :checkbox:checked`).length;
            let chkbox_not_chek = $(`${TT} td :checkbox`).length;
            $(`${TT} #check_count`).html(`${chkbox_chek}/${chkbox_not_chek}`)

            switch (true) {
                case chkbox_chek === 0:
                    $(`${TT} #checkbox_all :checkbox`).prop('indeterminate', false).prop('checked', false);
                    break;
                case chkbox_chek === chkbox_not_chek:
                    $(`${TT} #checkbox_all :checkbox`).prop('indeterminate', false).prop('checked', true);
                    break;
                case chkbox_chek < chkbox_not_chek:
                case chkbox_chek > 0:
                    $(`${TT} #checkbox_all :checkbox`).prop('indeterminate', true);
                    break;
            }
        }
    }
    create() {
        $(this.table + '> thead > tr').html('');
        if(this.checkboxes) $(this.table + '> thead > tr').append('<th> <a class="btn-floating waves-effect btn-flat btn-flat-circle waves-dark" id="checkbox_all"><label><input id="indeterminate-checkbox" type="checkbox" class="filled-in" checked="checked"><span></span></label></a> <span>Выбрано:&nbsp;</span><span id="check_count"></span></th>');
        for(let i = 0; i < this.content[0].length; i++){
            $(this.table + '> thead > tr').append(`<th>${this.content[0][i]}</th>`);
        }
        if(this.editing) $(this.table + '> thead > tr').append('<th class="right-align"> <a class="btn-floating waves-effect btn-flat btn-flat-circle waves-dark" id="add_row"><i class="material-icons small black-text notranslate">add</i></a> <a class="btn-floating waves-effect btn-flat btn-flat-circle waves-dark" id="delete_row"><i class="material-icons small black-text notranslate">delete</i></a></th>');

        $(this.table + '> tbody').html('');
        for(let i = 1; i < this.content.length; i++){
            $(this.table + '> tbody').append('<tr></tr>');

            for(let j = 0; j < this.content[i].length; j++){
                if(this.checkboxes) $(this.table + '> tbody > tr').eq(i-1).append(`<td> <a class="btn-floating waves-effect btn-flat btn-flat-circle waves-dark" id="checkbox" data-index="${i-1}"><label><input type="checkbox" class="filled-in" checked="checked"><span></span></label></a> </td>`);
                $(this.table + '> tbody > tr').eq(i-1).append(`<td>${this.content[i][j]}</td>`);
                if(this.editing) $(this.table + '> tbody > tr').eq(i-1).append(`<td class="right-align"><a class="btn-floating waves-effect btn-flat btn-flat-circle waves-dark" id="edit_row" data-index="${i-1}"><i class="material-icons small black-text notranslate">edit</i></a> <a class="btn-floating waves-effect btn-flat btn-flat-circle waves-dark" id="hide_row" data-index="${i-1}"><i class="material-icons small black-text notranslate">visibility</i></a></td>`);

            }
        }
        this.checkboxes_upd();
    }
    get val(){
        let cnt = this.content;
        let table_data = [];
        let tr_row = $(this.table + '> tbody > tr[disabled!="disabled"]');

        for(let i = 0; i < tr_row.length; i++){
            table_data.push(cnt[tr_row.eq(i).index()+1]);
        }
        return table_data;
    }
}

