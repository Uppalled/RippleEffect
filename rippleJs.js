//get all elements that have the class name rippleJs
var objects = document.getElementsByClassName("rippleJs");
var i;
//Run ripple function for each element
for (i = 0; i < objects.length; i++) {
    Ripple(objects[i]);
}
/**
 * Adds Ripple effect to objects 
 * @param {Object}  obj - object we want to add ripple effect to
 */
function Ripple(obj) {
    //Set defaults 
    var duration = 500;
    var color = 'rgba(255,255,255,0.5)';
    //add an click event to objects
    obj.addEventListener('click', function (e) {
        // Set up the ripple circle
        var circle = document.createElement('div');
        circle.classList.add('RippleCss');
        circle.style.backgroundColor = color;
        //Animation duration for all browser types
        circle.style.WebkitAnimationDuration = duration + 'ms';
        circle.style.MozAnimationDuration = duration + 'ms';
        circle.style.animationDuration = duration + 'ms';

        //Get the largest length of obj, because we want the circle to ripple to the edges
        var diameter = Math.max(obj.clientWidth, obj.clientHeight);
        //Set the size of the circle
        circle.style.width = diameter + 'px';
        circle.style.height = diameter + 'px';

        //Set position of circle, e gives us the place that the the client clicked
        circle.style.left = e.clientX - obj.offsetLeft - (diameter / 2) + 'px';
        circle.style.top = e.clientY - obj.offsetTop - (diameter / 2) + 'px';
        //Add the circle to the button
        obj.appendChild(circle);

        //Make sure the circle gets removed after the animation is done
        setTimeout(function () {
            obj.removeChild(circle);
        }, duration);
    });
}

