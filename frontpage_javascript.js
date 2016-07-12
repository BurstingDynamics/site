// JS for attract slider
var img_count = 3,
	slider_time = 5000,
	transition_delay = 900;
	step = 0.02;
// slider function starts
var im_list = [], 
	i = 0,
	present_image = 0,
	present_slider = 0;
//console.log("okay here");
//function calls
downwardscroll();
slider();
forms();

function downwardscroll(){
	//Color logo preload
	var newImg1 = new Image();
		newImg1.src = "images/site_icon_color.png";
		newImg1.style.height = newImg1.style.width = "0px";
		newImg1.style.position = "absolute";
		newImg1.style.zIndex = 100;
		document.body.appendChild(newImg1);
	
	//Get Elements
	var navbar = document.getElementById("navbar"),
		mainsitelogo = document.getElementById("mainsitelogo"),
		active_nav = document.getElementsByClassName("active_page_nav"),
		inactive_nav = document.getElementsByClassName("inactive_page_nav"),
		attractOverlay = document.getElementById("attract_box_overlay"),
		mainbodycontents = document.getElementById("mainbodycontents");
		white_logo = mainsitelogo.src;

	var previous_scroll_location=0,
		current_scroll_location=0,
		currently_in_transition=false; 
		
	setInterval(function(){
		current_scroll_location = (window.pageYOffset || document.body.scrollTop);
		//console.log(current_scroll_location + "  " + previous_scroll_location);
		if(current_scroll_location == previous_scroll_location){
			//console.log("Currently same");
		}
		else{
			if(!currently_in_transition && (previous_scroll_location==0 || current_scroll_location==0)){
				//console.log("not same - transitions");
				if (previous_scroll_location == 0)
					scrolling_up_down();
				else
					scrolling_down_up();
				previous_scroll_location = current_scroll_location;
			}
			else{
				//previous_scroll_location = current_scroll_location;
				//console.log("not same - halted");
			}
		}
	}, 10)

	function scrolling_up_down(){
		//console.log("Up down called");
		mainsitelogo.src = newImg1.src;
		navbar.style.backgroundColor = "rgba(255,255,255,0.96)";
		for (var i=0 ;i<active_nav.length ; i++)
			active_nav[i].style.color = "#000";
		for (var i=0 ;i<inactive_nav.length ; i++)
			inactive_nav[i].style.color = "#000";
		var marginsteps = -4,
			marginintial = 0,
			marginfinal = -340,
			steptimer = 1;
			zerodarkness = 0;
			nonzerodarkness = 0.9;
			darknessstep = marginsteps/(marginfinal-marginintial)*(nonzerodarkness-zerodarkness);
		currently_in_transition = true;
		mainbodyeffector_scroll_up_down(0,0);
		function mainbodyeffector_scroll_up_down(presentmargin,presentdarkness){
			//console.log(mainbodycontents.style.marginTop);
			if (presentmargin != marginfinal){
				mainbodycontents.style.marginTop = (presentmargin + marginsteps) +"px";
				attractOverlay.style.backgroundColor = "rgba(0,0,0," + (presentdarkness+darknessstep) +")" ;
				setTimeout(function(){mainbodyeffector_scroll_up_down(presentmargin+marginsteps, presentdarkness+darknessstep);},steptimer);
			}
			else
				currently_in_transition = false;
		}
	}
	function scrolling_down_up(){
		//console.log("Down Up called");
		mainsitelogo.src = white_logo;
		navbar.style.backgroundColor = "rgba(255,255,255,0)";
		for (var i=0 ;i<active_nav.length ; i++)
			active_nav[i].style.color = "#fff";
		for (var i=0 ;i<inactive_nav.length ; i++)
			inactive_nav[i].style.color = "#fff";
		var marginsteps = 2,
			marginintial = -340,
			marginfinal = 0,
			steptimer = 1;
			zerodarkness = 0;
			nonzerodarkness = 0.9;
			darknessstep = marginsteps/(marginfinal-marginintial)*(zerodarkness-nonzerodarkness);
		currently_in_transition = true;
		mainbodyeffector_scroll_down_up(-340,0.9);
		function mainbodyeffector_scroll_down_up(presentmargin,presentdarkness){
			//console.log(mainbodycontents.style.marginTop);
			if (presentmargin != marginfinal){
				mainbodycontents.style.marginTop = (presentmargin + marginsteps) +"px";
				attractOverlay.style.backgroundColor = "rgba(0,0,0," + (presentdarkness+darknessstep) +")" ;
				setTimeout(function(){mainbodyeffector_scroll_down_up(presentmargin+marginsteps, presentdarkness+darknessstep);},steptimer);
			}
			else
				currently_in_transition = false;
		}
	}






		/*if ((window.pageYOffset || document.body.scrollTop) == 0){
			//navigation_effector_top(-340,10);
			attractOverlay.style.backgroundColor = "rgba(0,0,0,0.1)";
			}
		else{
			//navigation_effector_scrolled(0,10);
			attractOverlay.style.backgroundColor = "rgba(0,0,0,0.9)";
		}
		function navigation_effector_top(current,step_up){
			if (current!=0){
				console.log("Top effector "+ (current+step_up));
				mainbodycontents.style.marginTop = (current + step_up) + "px";
				setTimeout(navigation_effector_top(current+step_up, step_up),100);
			}
		}
		function navigation_effector_scrolled(current,step_dn){
			if (current!=-340){
				console.log("Scroll effector "+ (current-step_dn));
				mainbodycontents.style.marginTop =(current - step_dn) + "px";
				setTimeout(navigation_effector_top(current-step_dn, step_dn),10);
			}
			mainsitelogo.src = newImg1.src;
			mainbodycontents.style.marginTop = "-340px";
		}*/
}
function slider(){
	for (i=0;i<img_count;i++){
		var newImg = new Image();
		newImg.style.height = newImg.style.width = "0px";
		newImg.style.position = "absolute";
		newImg.style.zIndex = 100;
		newImg.src = "images/front_page/slider/" + i + ".jpg";
		im_list[i] = newImg;
		document.body.appendChild(newImg);
	}
		setInterval(function(){sliderTransition();},slider_time);


	function sliderTransition(){
		//console.log("sliderTransition is called");
		var next_slider = (present_slider + 1) % 2,
			present_ID = "attract" + present_slider,
			next_ID = "attract" + next_slider,
			next_image = (present_image + 1)	% img_count,
			delay=transition_delay*step,
			iteration_count = 1/step;
			img_present = document.getElementById(present_ID),
			img_next = document.getElementById(next_ID);
			img_next.src = im_list[next_image].src;
			varyopacity(1,0);
			present_slider = next_slider;
			present_image = next_image;	

		function varyopacity(present_opacity, next_opacity){
			if (next_opacity<1){
				next_opacity +=step;
				present_opacity = 1-next_opacity;
				img_present.style.opacity = present_opacity;
				img_next.style.opacity = next_opacity;
				setTimeout(function(){ varyopacity(present_opacity,next_opacity); },delay);
			}
			
		}
	}
}
function forms(){
	var form = document.getElementById("attractemails").getElementsByTagName("input");
	form[0].addEventListener("click", function(){ if(form[0].value == "First Name")form[0].value = ""; });
	form[0].addEventListener("change",function(){ if (form[0].value == "") form[0].value = "First Name";});
	form[1].addEventListener("click", function(){ if(form[1].value == "Last Name")form[1].value = ""; });
	form[1].addEventListener("change",function(){ if (form[1].value == "") form[1].value = "Last Name";});
	form[2].addEventListener("click", function(){ if(form[2].value == "Email ID")form[2].value = ""; });
	form[2].addEventListener("change",function(){ if (form[2].value == "") form[2].value = "Email ID";});
	//document.body.addEventListener("abort"
}
