/**
 * Created by BRPX0413 on 27/06/2017.
 */
class perso
{
    constructor (name, image_url)
    {
        this.perso_image = image_url+".png";
        this.perso_image_walk = image_url+".gif";
        this.perso_name = name;
        this.speed = 5;
        this.sword_img = "img/sword.png";
        this.showPerso (358, 487);
        this.showPanel ();
        this.move (this.speed);
        this.stop();
        this.setSword ();
    }

    showPerso (x, y)
    {
        document
            .querySelector("#id_perso")
            .setAttribute("style", "top: "+y+"px; left: "+x+"px; background:url("+this.perso_image+") top right");
    }

    showPanel ()
    {
        document
            .addEventListener(
                "keypress",
                function (event)
                {
                    var perso_panel = document.querySelector("#perso_panel");
                    var displayAttr = document.defaultView.getComputedStyle(perso_panel, null).display;
                    if (event.keyCode === 32 && displayAttr === "none") {
                        document.querySelector("#perso_panel")
                            .setAttribute("style", "display: block")
                    }
                    else if (event.keyCode === 32 && displayAttr === "block") {
                        document.querySelector("#perso_panel")
                            .setAttribute("style", "display: none")
                    }
                }
            )
    }

    move (speed)
    {
        var image_walk = this.perso_image_walk;
        window
            .addEventListener (
                "keydown",
                function (event)
                {
                    var current_x = document.querySelector("#id_perso").offsetLeft;
                    var current_y = document.querySelector("#id_perso").offsetTop;
                    if (event.keyCode === 38) {
                        var up = current_y - speed;
                        document.querySelector("#id_perso")
                            .setAttribute("style", "top: "+up+"px; left: "+current_x+"px; background:url("+image_walk+") bottom right");
                    }
                    if (event.keyCode === 40) {
                        var down = current_y + speed;
                        document.querySelector("#id_perso")
                            .setAttribute("style", "top: "+down+"px; left: "+current_x+"px; background:url("+image_walk+") top right");
                    }
                    if (event.keyCode === 39) {
                        var right = current_x + speed;
                        document.querySelector("#id_perso")
                            .setAttribute("style", "top: "+current_y+"px; left: "+right+"px; background:url("+image_walk+") top left");
                    }
                    if (event.keyCode === 37) {
                        var left = current_x - speed;
                        document.querySelector("#id_perso")
                            .setAttribute("style", "top: "+current_y+"px; left: "+left+"px; background:url("+image_walk+") bottom left");
                    }

                }
            );
    }

    stop ()
    {
        var image_stop = this.perso_image;
        document.body
            .addEventListener (
                "keyup",
                function (event) {
                    var current_x = document.querySelector("#id_perso").offsetLeft;
                    var current_y = document.querySelector("#id_perso").offsetTop;
                    if (event.keyCode === 38) {
                        document.querySelector("#id_perso")
                            .setAttribute("style", "top: "+current_y+"px; left: "+current_x+"px; background:url("+image_stop+") bottom right");
                    }
                    if (event.keyCode === 40) {
                        document.querySelector("#id_perso")
                            .setAttribute("style", "top: "+current_y+"px; left: "+current_x+"px; background:url("+image_stop+") top right");
                    }
                    if (event.keyCode === 39) {
                        document.querySelector("#id_perso")
                            .setAttribute("style", "top: "+current_y+"px; left: "+current_x+"px; background:url("+image_stop+") top left");
                    }
                    if (event.keyCode === 37) {
                        document.querySelector("#id_perso")
                            .setAttribute("style", "top: "+current_y+"px; left: "+current_x+"px; background:url("+image_stop+") bottom left");
                    }

                }
            );

    }

    setSword ()
    {
        var panel = document.querySelector("#perso_panel");
        var sword_img = document.createElement("img");
        sword_img.setAttribute("src", this.sword_img);
        sword_img.setAttribute("style", "height: 45%; margin : 0.5rem;");
        panel.appendChild(sword_img);
    }
}