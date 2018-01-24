var document1 = {
    header: "headerDocument",
    body: "bodyDocument",
    footer: "footerDocument",
    date: "dateDocument",

    app:{
        header: "headerapp",
        body: "bodyapp",
        footer: "footerapp",
        date: "today" 
    },

    editor: function(){
        
        var a = prompt("Vvedite header: ");
        var b = prompt("Vvedite body: ");
        var c = prompt("Vvedite footer: ");
        var d = prompt("Vvedite date: ");

        document1.app.header = a;
        document1.app.body = b;
        document1.app.footer = c;
        document1.app.date = d;
    },

    show: function(){
        console.log(document1.app.header + " " +  document1.app.body + " " + document1.app.footer + " " + document1.app.date);
    }
}

document1.editor();
document1.show();

