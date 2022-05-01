// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.0

$.getJSON(
    "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    function (data) {
        console.log(data);
        var id = data.id;
        var name = data.name;
        var type = data.type;
        var race = data.race;
        var desc = data.desc;
        var atk = data.atk;
        var def = data.def;
        var level = data.level;
        var card_sets = data.card_sets;

        $(".id").append(id);
        $(".name").append(name);
        $(".type").append(type);
        $(".race").append(race);
        $(".desc").append(desc);
        $(".atk").append(atk);
        $(".def").append(def);
        $(".level").append(level);
        $(".card_sets").append(card_sets);
    });
