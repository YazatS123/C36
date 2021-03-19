class Form{
    constructor(){}
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(730, 0);
        var input = createInput("Name");
        var button = createButton("Play");
        var greeting = createElement('h3');
        input.position(730, 160);
        button.position(850, 200);
        button.mousePressed(function(){
            var name = input.value();
            input.hide;
            button.hide;
            greeting.html("Welcome, " + name);
            greeting.position(730, 160);
        });
        
    }
}