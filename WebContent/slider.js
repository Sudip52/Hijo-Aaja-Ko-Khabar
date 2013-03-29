//<script type="text/javascript">
	var imgSlide;
	var pic = 0;
	var imageFill;
	var imgFill;
	var imgDescript;
	var imgDes;
	var horoScope;
	var shname;
	var shdescript;
	
	var searchValue;
	
	
	

	window.onload = function() {

		imgSlide = document.getElementById('img');
		imgDescript = document.getElementById("description");
		shname = document.getElementById("shname");
		shdescript = document.getElementById("shdescription");
		

		imgFill = new Array();
		imgFill[0] = document.getElementById('img1');
		imgFill[1] = document.getElementById('img2');
		imgFill[2] = document.getElementById('img3');
		imgFill[3] = document.getElementById('img4');
		imgFill[4] = document.getElementById('img5');

		imgDes = new Array();
		
		
		imgDes[0] = new String();
		imgDes[0] = "Flood depict, the measurable condition of Nepalese people";
		
		imgDes[1] = new String();
		imgDes[1] = "Journalist waiting for newly appointed Prime Minister";
		
		imgDes[2] = new String();
		imgDes[2] = "An enthralling view of Sunset at Sauraha,Chitwan";
		
		imgDes[3] = new String();
		imgDes[3] = "Nature at its best,free bird flying on their own";
		
		imgDes[4] = new String();
		imgDes[4] = "The football match between two clubs in Old Trafford";
		
		// preload images
		
		images = new Array();
		images[0] = new Image();
		images[0].src = "Images/image1.png";

		images[1] = new Image();
		images[1].src = "Images/image2.png";

		images[2] = new Image();
		images[2].src = "Images/image3.png";

		images[3] = new Image();
		images[3].src = "Images/image4.png";

		images[4] = new Image();
		images[4].src = "Images/image5.png";

		imageFill = new Array();

		imageFill[0] = new Image();
		imageFill[0].src = "Images/fill.png";

		imageFill[1] = new Image();
		imageFill[1].src = "Images/unfill.png";
		
		horoScope = new Array();
	    
		horoScope[0] = new String();
		horoScope[0] = "A sudden upsurge in your intuition could have you feeling more in tune to the thoughts," +
				" feelings, and desires of others. Your communication" +
				" is going to be clear and open as a result. You're likely to grow" +
				" closer to everyone dear to you, especially your romantic partner." +
				" Don't expect everything you pick up to be positive. Others have their issues." +
				" Let them know you understand.";
		
		horoScope[1] = new String();
		horoScope[1] = "Your mind is strong and focused today. " +
				"As a result, you're probably feeling especially physically robust. " +
				"Sudden insights could earn you some satisfying acknowledgement, not to mention the respect" +
				" of someone important to you. Your intuition level is high and apt to serve you well now," +
				" particularly where work and health are concerned. Make the most of it!";

		horoScope[2] = new String();
		horoScope[2] = "Expect to spend much of your day alone. Information obtained from books or videos, " +
				"perhaps involving history, philosophy, or religion, might inspire you to look deeper into a subject" +
				" and turn it to your own advantage. You might decide to take a trip or return to college." +
				" There's also the chance that you could be inspired to write or otherwise express your ideas and " +
				"feelings. Go to it!";
		
		horoScope[3] = new String();
		horoScope[3] = "Some strange dreams could stimulate your imagination and start you on new avenues" +
				" of exploration. You might at some point play detective. What you seek is likely to" +
				" be within your psyche. Don't be surprised if you learn new things about yourself that you" +
				" hadn't been aware of before. You could also find your psychic faculties increasing.";
		
		horoScope[4] = new String();
		horoScope[4] = "Reading could take up a lot of your time today. Books on psychology or the occult " +
				"sciences might seem interesting, particularly as your intuition is operating on a " +
				"higher level than usual. You might not want to talk about what's coming up for you, " +
				"but that's OK. You will need to make sense of it first before you can share it with clarity.";
		
		horoScope[5] = new String();
		horoScope[5] = "Your mind is likely to be on your finances today, and you may be searching " +
				"for previously unknown ways to advance yourself. Colleagues or friends " +
				"could help steer you in the right direction. When it comes to jotting down possibilities," +
				" trust your intuition, as it's operating at a very high level. List your possibilities" +
				" and then let it stew for a few days before going over them again.";
		
		horoScope[6] = new String();
		horoScope[6] = "Increased communication with a close friend or lover, more on a subtle than verbal level" +
				", could bring you closer and enrich your relationship. Quiet time spend together " +
				"today could generate a new sense of closeness. Images and ideas that come from deep within" +
				" you can contribute to your creative self-expression. Write down any insights so you can refer" +
				" to them later. Work from the heart.";
		
		horoScope[7] = new String();
		horoScope[7] = "Today you might crave solitude, perhaps for meditation or to contemplate your" +
				" current situation. You may feel you're at a crossroads and need to decide which way to go. " +
				"This could involve the next step in your material progress or self-expression, or it might" +
				" involve your spiritual path. Emotions from the past could well up, but this is a positive" +
				" development. Don't fight it.";
		
		horoScope[8] = new String();
		horoScope[8] = "You might spend a lot of time in conversation with friends who share your" +
				" interests. Their insights could lead to new insights on your part, Sagittarius, and vice versa." +
				" This process could bring all of you closer together. Good news could come through the mail," +
				" email, or phone regarding goals you've been trying to reach. You're also likely to send out a " +
				"lot of communications yourself.";
		
		horoScope[9] = new String();
		horoScope[9] = "Paperwork involving finances, Capricorn, perhaps personal, perhaps involving your" +
				" employer's funds, or both, is likely to need some intense attention during the day. This doesn't" +
				" necessarily imply anything negative. In fact, just the opposite. It does mean that some careful" +
				" planning or budgeting is going to be required in order to make the most of your current " +
				"situation.";
		
		horoScope[10] = new String();
		horoScope[10] = "Today you may want to spend your free time alone, contemplating various ideas, Aquarius." +
				" Spiritual or metaphysical philosophies from ancient cultures or foreign lands might be more" +
				" appealing than usual. Reading about them at this time could approach obsession, but this is OK. " +
				"Whatever you learn today is likely to contribute greatly to your personal growth and perhaps " +
				"self-expression.";
		
		horoScope[11] = new String();
		horoScope[11] = "Today, Pisces, your mind may turn toward deep subjects. You could explore the sciences," +
				" psychology, the occult, or metaphysics. You will probably discover some new facts or ideas that" +
				" could keep your mind occupied for hours. Needless to say, you will spend much of your time " +
				"alone exploring these themes. You might also want to write down your insights and revelations" +
				" to study later.";
		
		
		
		
        Aries();
		slide();// automatic 
		date_time();
	};
	
	function Aries()
	{
		shname.innerHTML = "Aries";
		shdescript.innerHTML = horoScope[0];
	}
	function Taurus()
	{
		shname.innerHTML = "Taurus";
		shdescript.innerHTML = horoScope[1];
	}
	function Gemini()
	{
		shname.innerHTML = "Gemini";
		shdescript.innerHTML = horoScope[2];
	}
	function Cancer()
	{
		shname.innerHTML = "Cancer";
		shdescript.innerHTML = horoScope[3];
	}
	function Leo()
	{
		shname.innerHTML = "Leo";
		shdescript.innerHTML = horoScope[4];
	}
	function Virgo()
	{
		shname.innerHTML = "Virgo";
		shdescript.innerHTML = horoScope[5];
	}
	function Libra()
	{
		shname.innerHTML = "Libra";
		shdescript.innerHTML = horoScope[6];
	}
	function Scorpio()
	{
		shname.innerHTML = "Scorpio";
		shdescript.innerHTML = horoScope[7];
	}
	function Sagittarius()
	{
		shname.innerHTML = "Sagittarius";
		shdescript.innerHTML = horoScope[8];
	}
	function Capricorn()
	{
		shname.innerHTML = "Capricorn";
		shdescript.innerHTML = horoScope[9];
	}
	function Aquarius()
	{
		shname.innerHTML = "Aquarius";
		shdescript.innerHTML = horoScope[10];
	}
	function Pisces()
	{
		shname.innerHTML = "Pisces";
		shdescript.innerHTML = horoScope[11];
	}

	function slide() {
		imgSlide.src = images[pic].src;
		imgDescript.innerHTML=imgDes[pic];
		
		fill();
		
		if (pic < (images.length - 1)) // images.length - 1 can be used here
		{
			pic++;
		} else {
			pic = 0;

		}
		timer = setTimeout(slide, 1200);
	}
	function one() {
		pic = 0;
		imgSlide.src = images[0].src;
		imgDescript.innerHTML=imgDes[0];
		
		fill();
	}
	function two() {
		pic = 1;
		imgSlide.src = images[1].src;
		imgDescript.innerHTML=imgDes[1];
		
		fill();
	}
	function three() {
		pic = 2;
		imgSlide.src = images[2].src;
		imgDescript.innerHTML=imgDes[2];
		
		fill();
	}
	function four() {
		pic = 3;
		imgSlide.src = images[3].src;
		imgDescript.innerHTML=imgDes[3];
		
		fill();
	}
	function five() {
		pic = 4;
		imgSlide.src = images[4].src;
		imgDescript.innerHTML=imgDes[4];
	
		fill();
	}
	function fill()
	{
		for(var i=0;i<imgFill.length;i++)
		{
		  if(i==pic)
			  {
			  imgFill[i].src = imageFill[0].src;
			  }
		  else{
			  imgFill[i].src = imageFill[1].src;
		  }
		}
	}
	function date_time() {
		date = new Date;
		year = date.getFullYear();
		month = date.getMonth();
		months = new Array('January', 'February', 'March', 'April', 'May',
				'June', 'Jully', 'August', 'September', 'October',
				'November', 'December');
		d = date.getDate();
		h = date.getHours();
		if (h < 10) {
			h = "0" + h;
		}
		m = date.getMinutes();
		if (m < 10) {
			m = "0" + m;
		}
		s = date.getSeconds();
		if (s < 10) {
			s = "0" + s;
		}
		result = "Date:" + ' ' + months[month] + ' ' + d + ' ' + year + ''+"\t"+"\t"+ "\tTime:" + ' ' + h + ':' + m + ':' + s;
		document.getElementById('date_time').innerHTML = result;
		setTimeout(date_time, 1000);
	}
//</script>
